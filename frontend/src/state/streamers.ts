import {atom, selector, RecoilState} from "recoil";
import {StreamerDetail} from "../models/streamerDetail.ts";

export const streamerListState: RecoilState<StreamerDetail[]> = atom({
    key: "streamerList",
    default: new Array<StreamerDetail>()
});

export const streamerListStateSelector = selector({
    key: "streamerListState",
    get: ({get}) => {
        return get(streamerListState);
    }
})
