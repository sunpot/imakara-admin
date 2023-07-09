import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {StreamerDetail, StreamerLink, Tag} from '../models/streamerDetail.ts';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

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
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

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
    return new StreamerDetailImpl(name, thumbnail, channel_url);
}

export default function Streamer(props: { id: number; }) {
    const [expanded, setExpanded] = React.useState(false);
    const detail = getLiverDetail(props.id);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
        }}>
            <CardHeader
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
            <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}