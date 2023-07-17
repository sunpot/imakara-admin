import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {StreamerDetail, StreamerLink, Tag} from '../models/streamerDetail.ts';
import StreamerLinkList from "./StreamerLinkList.tsx";
import Divider from "@mui/material/Divider";
import {Chip} from "@mui/material";
import Box from "@mui/material/Box";


class StreamerLinkImpl implements StreamerLink {
    constructor(url: string) {
        this.url = url;
        this.thumbnail = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/320px-YouTube_full-color_icon_%282017%29.svg.png";
    }

    thumbnail: string;
    url: string;
}

class StreamerDetailImpl implements StreamerDetail {
    displayName: string;
    thumbnail: string;
    otherLinks: Array<StreamerLink>;
    primaryLink: StreamerLink;
    tags: Array<Tag>;

    constructor(displayName: string, thumbnail: string, primaryLink: string) {
        this.displayName = displayName;
        this.thumbnail = thumbnail;
        this.primaryLink = new StreamerLinkImpl(primaryLink);
        this.otherLinks = [];
        this.tags = [];
    }

    addTag(value: string): void {
        this.tags.push(new TagImpl(value));
    }
}

class TagImpl implements Tag {
    value: string;
    constructor(value: string) {
        this.value = value;
    }
}

type TmpStreamer = {
    id: number
    name: string,
    thumbnail: string,
    channel_url: string,
    tags: string[],
}

const mockStreamers: TmpStreamer[] = [
    {
        id: 1,
        name: "える",
        thumbnail: "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/d42ede0830fd40cab274bc483cc5d0ad/liver-face_Elu.png.webp?w=200&fm=webp",
        channel_url: "https://www.youtube.com/channel/UCYKP16oMX9KKPbrNgo_Kgag",
        tags: ["1期生", "かえる"],
    },
    {
        id: 2,
        name: "静凛",
        thumbnail: "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/3e388baf964c4c4a84b27cd709f86ce4/liver-face_Rin_Shizuka.png.webp?w=200&fm=webp",
        channel_url: "https://www.youtube.com/channel/UC6oDys1BGgBsIC3WhG1BovQ",
        tags: ["1期生"],
    },
    {
        id: 3,
        name: "渋谷ハジメ",
        thumbnail: "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/48d793b718984df8b9f81ade7f0b8a5a/liver-face_Hajime_Shibuya.png.webp?w=200&fm=webp",
        channel_url: "https://www.youtube.com/channel/UCeK9HFcRZoTrvqcUCtccMoQ",
        tags: ["1期生"],
    },
    {
        id: 4,
        name: "鈴谷アキ",
        thumbnail: "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/0cb04e2488474c329bb586a3831a8885/liver-face_Aki_Suzuya.png.webp?w=200&fm=webp",
        channel_url: "https://www.youtube.com/channel/UCpnvhOIJ6BN-vPkYU9ls-Eg",
        tags: ["1期生"],
    },
    {
        id: 5,
        name: "月ノ美兎",
        thumbnail: "https://cdn.wikiwiki.jp/to/w/nijisanji/%E6%9C%88%E3%83%8E%E7%BE%8E%E5%85%8E/::ref/face_orig.png.webp?rev=f851cb1ddd0a8d624204895dd42cc444&t=20220809052103",
        channel_url: "https://www.youtube.com/channel/UCD-miitqNY3nyukJ4Fnf4_A",
        tags: ["1期生"],
    },
    {
        id: 6,
        name: "樋口楓",
        thumbnail: "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/a10e6c0587a74e4781e3329c4ae732d6/liver-face_Kaede_Higuchi.png.webp?w=200&fm=webp",
        channel_url: "https://www.youtube.com/channel/UCsg-YqdqQ-KFF0LNk23BY4A",
        tags: ["1期生", "かえる"],
    },
    {
        id: 7,
        name: "モイラ",
        thumbnail: "https://images.microcms-assets.io/assets/5694fd90407444338a64d654e407cc0e/ea9f478820c84208840d248d5c6610d1/liver-face_Moira.png.webp?w=200&fm=webp",
        channel_url: "https://www.youtube.com/channel/UCvmppcdYf4HOv-tFQhHHJMA",
        tags: ["1期生"],
    }
];

const getLiverDetail = (id: number) => {
    const a = mockStreamers.find(_ => _.id === id);
    const name = a.name;
    const thumbnail = a.thumbnail;
    const channel_url = a.channel_url;

    const streamerDetail = new StreamerDetailImpl(name, thumbnail, channel_url);
    a.tags.map(_ => {streamerDetail.addTag(_)});
    return streamerDetail;
}

export default function Streamer(props: { id: number; }) {
    const detail = getLiverDetail(props.id);

    return (
        <Card sx={{
            p: 1,
            display: 'flex',
            flexDirection: 'column',
        }}>
            <CardHeader
                sx={{p: 1}}
                avatar={
                    <Avatar alt={detail.displayName} src={detail.thumbnail}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={detail.displayName}
                subheader="September 14, 2016"
            />
            <CardContent sx={{p: 1}}>
                <StreamerLinkList primary={detail.primaryLink} other={detail.otherLinks} />
                <Divider />
                <Box>
                    {detail.tags.map(_ => {
                        return (
                            <Chip sx={{mt: 1, mr: 1}} label={_.value} />
                        )
                    })}
                </Box>
            </CardContent>
        </Card>
    );
}