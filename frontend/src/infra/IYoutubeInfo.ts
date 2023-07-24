import {StreamerDetail} from "../models/streamerDetail";

export interface IYoutubeInfoRepository{
    getRegistered(url: string): Promise<StreamerDetail>;
}