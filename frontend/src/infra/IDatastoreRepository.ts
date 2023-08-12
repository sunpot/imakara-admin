// import {StreamerDetail} from "../models/streamerDetail";

export interface IDatastoreRepository{
    listRegistered(): Promise<Array<string>>;
}