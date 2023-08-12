import {atom, selector, RecoilState} from "recoil";

export const streamerListState: RecoilState<string[]> = atom({
    key: "streamerList",
    default: new Array<string>()
});

export const streamerListStateSelector = selector({
    key: "streamerListState",
    get: ({get}) => {
        return get(streamerListState);
    }
})
