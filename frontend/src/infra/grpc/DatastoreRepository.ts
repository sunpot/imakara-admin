import { PromiseClient } from "@bufbuild/connect";
import {Common} from "../../proto/common_connect";

import {Base} from "./Base";
import {IDatastoreRepository} from "../IDatastoreRepository.ts";
import {ListStreamerInfoResponse, PutStreamerInfoResponse, StreamerDetailResponse} from "../../proto/common_pb";
import {StreamerDetail, StreamerDetailImpl} from "../../models/streamerDetail.ts";

export class DatastoreRepository extends Base<typeof Common> implements IDatastoreRepository {
    client: PromiseClient<typeof Common>;

    constructor() {
        super();
        this.client = this.getClient(Common);
    }


    listRegistered(): Promise<Array<string>> {
        return new Promise((resolve, reject) => {
            this.client
                .listStreamerInfo({})
                .then((res: ListStreamerInfoResponse) => {
                    resolve(res.ids);
                })
                .catch((err: any) => {reject(err)})
        });
    }

    getDetail(id: string): Promise<StreamerDetailImpl> {
        return new Promise((resolve, reject) => {
            this.client
                .getStreamerDetail({
                    id: id
                })
                .then((res: StreamerDetailResponse) => {
                    const data = new StreamerDetailImpl(
                        res.id,
                        res.title,
                        res.avatarUrl,
                        res.primaryChannel,
                    );
                    resolve(data);
                })
                .catch((err: any) => {reject(err)})
        });
    }

    putDetail(item: StreamerDetail): Promise<void> {

        return new Promise((resolve, reject) => {
            this.client
                .putStreamerInfo(
                    {
                        title: item.displayName,
                        description: "",
                        avatarUrl: item.thumbnail,
                        primaryChannel: item.primaryLink.url,
                    }
                )
                .then((res: PutStreamerInfoResponse) => {
                    alert(res.result);
                    resolve();
                })
                .catch((err: any) => {reject(err)})
        });
    }
}
