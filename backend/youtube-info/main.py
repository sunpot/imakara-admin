# Import Module
from concurrent import futures
import logging
from os import environ

from googleapiclient.discovery import build
import grpc
import common_pb2
import common_pb2_grpc


def parse_url_to_id(url):
    url = str(url).strip()
    if "www.youtube.com" in url:
        return url.replace("https://www.youtube.com/", "")
    else:
        raise NotImplementedError


def get_youtube_info(streamer_id):
    # Create YouTube Object
    youtube = build('youtube', 'v3',
                    developerKey=environ['YOUTUBE_INFO_API_KEY'])
    channel_id = ""
    if streamer_id.startswith("@"):
        tmp_request = youtube.search().list(
            type='channel', part='snippet', q=streamer_id)
        tmp_response = tmp_request.execute()
        channel_id = tmp_response['items'][0]['snippet']['channelId']
        ch_request = youtube.channels().list(
            part='snippet',
            id=channel_id)


    else:
        ch_request = youtube.channels().list(
            part='snippet',
            id=streamer_id)
        channel_id = streamer_id

    # Channel Information
    ch_response = ch_request.execute()

    title = ch_response['items'][0]['snippet']['title']
    thumbnail = ch_response['items'][0]['snippet']['thumbnails']['default']['url']
    description = ch_response['items'][0]['snippet']['description']
    return title, thumbnail, "https://www.youtube.com/channel/%s" % channel_id, description


class StreamerInfo(common_pb2_grpc.DashboardServicer):
    def GetStreamerInfo(self, request, context):
        streamer_id = parse_url_to_id(request.url)

        (title, avatar_url, channel_id, description) = get_youtube_info(streamer_id)

        return common_pb2.StreamerInfoResponse(
            validation_response=common_pb2.ValidationResponse(
                result=common_pb2.ValidationResult.SUCCESS,
                reason=""
            ),
            title=title,
            avatar_url=avatar_url,
            primary_channel=channel_id,
            description=description
        )


# Press the green button in the gutter to run the script.
def serve():
    address = "0.0.0.0:50051"
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    common_pb2_grpc.add_DashboardServicer_to_server(StreamerInfo(), server)
    server.add_insecure_port(address)
    server.start()
    print("Server started, listening on " + address)
    server.wait_for_termination()


if __name__ == "__main__":
    logging.basicConfig()
    serve()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
# python -m grpc_tools.protoc -I..\..\proto --python_out=. --pyi_out=. --grpc_python_out=. ..\..\proto\common.proto
