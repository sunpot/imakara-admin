import {StreamerDetailImpl} from "../models/streamerDetail";
import {atom, selector, RecoilState} from "recoil";

export const streamerListState: RecoilState<StreamerDetailImpl[]> = atom({
    key: "streamerList",
    default: [
        new StreamerDetailImpl(
            1,
            "える",
            "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/d42ede0830fd40cab274bc483cc5d0ad/liver-face_Elu.png.webp?w=200&fm=webp",
            "https://www.youtube.com/channel/UCYKP16oMX9KKPbrNgo_Kgag",
            ["1期生", "かえる"],
        ),
        new StreamerDetailImpl(
            2,
            "静凛",
            "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/3e388baf964c4c4a84b27cd709f86ce4/liver-face_Rin_Shizuka.png.webp?w=200&fm=webp",
            "https://www.youtube.com/channel/UC6oDys1BGgBsIC3WhG1BovQ",
            ["1期生"],
        ),
        new StreamerDetailImpl(
            3,
            "渋谷ハジメ",
            "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/48d793b718984df8b9f81ade7f0b8a5a/liver-face_Hajime_Shibuya.png.webp?w=200&fm=webp",
            "https://www.youtube.com/channel/UCeK9HFcRZoTrvqcUCtccMoQ",
            ["1期生"],
        ),
        new StreamerDetailImpl(
            4,
            "鈴谷アキ",
            "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/0cb04e2488474c329bb586a3831a8885/liver-face_Aki_Suzuya.png.webp?w=200&fm=webp",
            "https://www.youtube.com/channel/UCpnvhOIJ6BN-vPkYU9ls-Eg",
            ["1期生"],
        ),
        new StreamerDetailImpl(
            5,
            "月ノ美兎",
            "https://cdn.wikiwiki.jp/to/w/nijisanji/%E6%9C%88%E3%83%8E%E7%BE%8E%E5%85%8E/::ref/face_orig.png.webp?rev=f851cb1ddd0a8d624204895dd42cc444&t=20220809052103",
            "https://www.youtube.com/channel/UCD-miitqNY3nyukJ4Fnf4_A",
            ["1期生"],
        ),
        new StreamerDetailImpl(
            6,
            "樋口楓",
            "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/a10e6c0587a74e4781e3329c4ae732d6/liver-face_Kaede_Higuchi.png.webp?w=200&fm=webp",
            "https://www.youtube.com/channel/UCsg-YqdqQ-KFF0LNk23BY4A",
            ["1期生", "かえる"],
        ),
        new StreamerDetailImpl(
            7,
            "モイラ",
            "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/ea9f478820c84208840d248d5c6610d1/liver-face_Moira.png.webp?w=200&fm=webp",
            "https://www.youtube.com/channel/UCvmppcdYf4HOv-tFQhHHJMA",
            ["1期生"],
        )
    ]
});

export const streamerListStateSelector = selector({
    key: "streamerListState",
    get: ({get}) => {
        return get(streamerListState);
    }
})