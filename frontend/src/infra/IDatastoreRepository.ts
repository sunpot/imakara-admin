// import {StreamerDetail} from "../models/streamerDetail";

import {StreamerDetail} from "../models/streamerDetail.ts";

export interface IDatastoreRepository{
    listRegistered(): Promise<Array<string>>;
    putDetail(item: StreamerDetail): Promise<void>;
}