import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Autocomplete, Fab, Link,} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import {StreamerDetailImpl} from "../models/streamerDetail";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import {useRecoilState} from 'recoil';
import {streamerListState} from "../state/streamers";
import {YoutubeInfoRepository} from "../infra/grpc/YoutubeInfo";

export default function AddEditFrame() {
    const [open, setOpen] = React.useState(false);
    const [invalidUrl, setInvalidUrl] = React.useState({state: false, message: ""});
    const [url, setUrl] = React.useState("");
    const [data, setData] = React.useState<StreamerDetailImpl|undefined>(undefined);
    const [list, setList] = useRecoilState(streamerListState)
    const repo = new YoutubeInfoRepository();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const getNewStreamerTmp = async () => {
        const tmp = await repo.getRegistered(url);
        // const tmp = new StreamerDetailImpl(
        //     100,
        //     "夜見れな",
        //     "https://yt3.googleusercontent.com/IIncCRzntW4-2phBOSa2hhvpq3CSbav32m1mDiC1ckYBDi9pD3IeBSft0su3R68qZuHdOt0z7g=s176-c-k-c0x00ffffff-no-rj",
        //     "https://www.youtube.com/@YorumiRena",
        // );

        setData(tmp);
    };

    const handleClose = () => {
        setOpen(false);
        setUrl("");
        if (data !== undefined) {
            setList([...list, data]);
        }
        setData(undefined);
    };

    const handleSubscribe = (url: string) => {
        if (list.find(_ => _.primaryLink.url === url)) {
            setInvalidUrl({state: true, message: "Already exists."});
        }
        else if (url.startsWith("https://")) {
            setInvalidUrl({state: false, message: ""});
            alert(`Channel ${url} will be added.`);
            getNewStreamerTmp().then(_ => null);
        } else {
            setInvalidUrl({state: true, message: "Please put a valid url"});
        }
    };

    const handleUrl = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setUrl(e.target.value);
    }

    return (
        <div>
            <Fab sx={{position: 'absolute', bottom: 32, right: 32}} onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter streamer channel url you want to add.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="channel_url"
                        label="Channel url"
                        type="url"
                        fullWidth
                        variant="standard"
                        placeholder={"https://..."}
                        error={invalidUrl.state}
                        helperText={invalidUrl.message}
                        value={url}
                        onChange={(e) => handleUrl(e)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleSubscribe(url)}>Subscribe</Button>
                </DialogActions>
                <Card sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <CardHeader
                        sx={{p: 1}}
                        avatar={
                            <Avatar alt={""} src={data?.thumbnail}/>
                        }
                        title={
                            <Link
                                href={data?.primaryLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {data?.displayName}
                            </Link>
                        }
                    />
                    <CardContent sx={{p: 1}}>
                        <Divider />
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={tagList}
                            getOptionLabel={(option) => option.title}
                            defaultValue={[]}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Select tags"
                                />
                            )}
                        />
                    </CardContent>
                </Card>
            </Dialog>
        </div>
    );
}

const tagList = [
    {title: "にじさんじ"},
    {title: "1期生"},
    {title: "2期生"},
    {title: "SEEDs 1期生"},
    {title: "SEEDs 2期生"},
    {title: "ゲーマーズ"}
];
