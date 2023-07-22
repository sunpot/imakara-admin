import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import {StreamerLink} from "../models/streamerDetail";
import {Link, ListItemAvatar} from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function StreamerLinkList(props: {primary: StreamerLink | undefined, other: StreamerLink[] | undefined}) {
    return (
        <Box sx={{ width: '100%', /*maxWidth: 360, */bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <Link href={props.primary?.url} target="_blank" rel="noopener noreferrer">
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar src={props.primary?.thumbnail} />
                                </ListItemAvatar>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </nav>
            <Divider />
        </Box>
    );
}