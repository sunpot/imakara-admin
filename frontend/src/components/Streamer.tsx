import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {StreamerDetailImpl, Tag} from '../models/streamerDetail';
import StreamerLinkList from "./StreamerLinkList";
import Divider from "@mui/material/Divider";
import {Chip} from "@mui/material";
import Box from "@mui/material/Box";



export default function Streamer(props: { item: StreamerDetailImpl; }) {
    return (
        <Card sx={{
            p: 1,
            display: 'flex',
            flexDirection: 'column',
        }}>
            <CardHeader
                sx={{p: 1}}
                avatar={
                    <Avatar alt={props.item.displayName} src={props.item.thumbnail}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.item.displayName}
                subheader="September 14, 2016"
            />
            <CardContent sx={{p: 1}}>
                <StreamerLinkList primary={props.item.primaryLink} other={props.item.otherLinks} />
                <Divider />
                <Box>
                    {props.item.tags.map((_: Tag) => {
                        return (
                            <Chip key={_.value} sx={{mt: 1, mr: 1}} label={_.value} />
                        )
                    })}
                </Box>
            </CardContent>
        </Card>
    );
}