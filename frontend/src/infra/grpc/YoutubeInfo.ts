import { PromiseClient } from "@bufbuild/connect";
import {frontend} from "../../proto/streamer-info_connect";

import {Base} from "./Base";
// import {ProgramItem, ProgramIndex} from "../../models/Program";
import {IYoutubeInfoRepository} from "../IYoutubeInfo";
import { StreamerInfoResponse} from "../../proto/streamer-info_pb";
import {StreamerDetailImpl} from "../../models/streamerDetail";

export class YoutubeInfoRepository extends Base<typeof frontend> implements IYoutubeInfoRepository {
    client: PromiseClient<typeof frontend>;

    constructor() {
        super();
        this.client = this.getClient(frontend);
    }

    getRegistered(url: string): Promise<StreamerDetailImpl> {
        return new Promise((resolve, reject) => {
            this.client
                .getStreamerInfo({
                    url: url
                })
                .then((res: StreamerInfoResponse) => {
                    let data = new StreamerDetailImpl(
                        0,
                        res.title,
                        res.avatarUrl,
                        "https://www.youtube.com" + res.channelId
                    );
                    resolve(data);
                })
                .catch((err: any) => {reject(err)})
        });

    }
}
