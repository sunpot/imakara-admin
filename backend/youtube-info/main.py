# Import Module
from googleapiclient.discovery import build
from concurrent import futures
import logging

import grpc
import streamer_info_pb2
import streamer_info_pb2_grpc

def parse_url_to_id(url):
    url = str(url).strip()
    if "www.youtube.com" in url:
        return url.replace("https://www.youtube.com/","")
    else:
        raise NotImplementedError

def get_youtube_info(streamer_id):
    # Create YouTube Object
    youtube = build('youtube', 'v3',
                    developerKey='xxx')

    ch_request = None
    if streamer_id.startswith("@"):
        ch_request = youtube.search().list(
            type='channel', part='snippet', q=streamer_id)
    else:
        ch_request = youtube.channels().list(
            part='snippet',
            id=streamer_id)

    # Channel Information
    ch_response = ch_request.execute()

    title = ch_response['items'][0]['snippet']['title']
    thumbnail = ch_response['items'][0]['snippet']['thumbnails']['default']['url']
    channel_id = ch_response['items'][0]['snippet']['channelId']
    return title, thumbnail, channel_id

class StreamerInfo(streamer_info_pb2_grpc.frontendServicer):
    def GetStreamerInfo(self, request, context):
        streamer_id = parse_url_to_id(request.url)

        (title, avatar_url, channel_id) = get_youtube_info(streamer_id)

        return streamer_info_pb2.StreamerInfoResponse(
            validation_response=streamer_info_pb2.ValidationResponse(
                result=streamer_info_pb2.ValidationResult.SUCCESS,
                reason=""
            ),
            title=title,
            avatar_url=avatar_url,
            channel_id=channel_id
        )


# Press the green button in the gutter to run the script.
def serve():
    port = "50051"
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    streamer_info_pb2_grpc.add_frontendServicer_to_server(StreamerInfo(), server)
    server.add_insecure_port("[::]:" + port)
    server.start()
    print("Server started, listening on " + port)
    server.wait_for_termination()


if __name__ == "__main__":
    logging.basicConfig()
    serve()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
# python -m grpc_tools.protoc -I../../protos --python_out=. --pyi_out=. --grpc_python_out=. ../../protos/helloworld.proto