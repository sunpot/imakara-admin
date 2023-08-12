import { PromiseClient } from "@bufbuild/connect";
import {Dashboard} from "../../proto/common_connect";

import {Base} from "./Base";
import {IYoutubeInfoRepository} from "../IYoutubeInfo";
import { StreamerInfoResponse} from "../../proto/common_pb";
import {StreamerDetailImpl} from "../../models/streamerDetail";

export class YoutubeInfoRepository extends Base<typeof Dashboard> implements IYoutubeInfoRepository {
    client: PromiseClient<typeof Dashboard>;

    constructor() {
        super();
        this.client = this.getClient(Dashboard);
    }

    getRegistered(url: string): Promise<StreamerDetailImpl> {
        return new Promise((resolve, reject) => {
            this.client
                .getStreamerInfo({
                    url: url
                })
                .then((res: StreamerInfoResponse) => {
                    const data = new StreamerDetailImpl(
                        "",
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
