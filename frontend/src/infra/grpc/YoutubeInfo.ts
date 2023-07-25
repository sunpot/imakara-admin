import { PromiseClient } from "@bufbuild/connect";
import {StreamerInfo} from "../../proto/common_connect";

import {Base} from "./Base";
import {IYoutubeInfoRepository} from "../IYoutubeInfo";
import { StreamerInfoResponse} from "../../proto/common_pb";
import {StreamerDetailImpl} from "../../models/streamerDetail";

export class YoutubeInfoRepository extends Base<typeof StreamerInfo> implements IYoutubeInfoRepository {
    client: PromiseClient<typeof StreamerInfo>;

    constructor() {
        super();
        this.client = this.getClient(StreamerInfo);
    }

    getRegistered(url: string): Promise<StreamerDetailImpl> {
        return new Promise((resolve, reject) => {
            this.client
                .getStreamerInfo({
                    url: url
                })
                .then((res: StreamerInfoResponse) => {
                    const data = new StreamerDetailImpl(
                        0,
                        res.title,
                        res.avatarUrl,
                        res.primaryChannel
                    );
                    resolve(data);
                })
                .catch((err: any) => {reject(err)})
        });

    }
}
