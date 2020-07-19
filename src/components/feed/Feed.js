import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Feed.css';
import UserIcon from '../profile/UserIcon';
import { Grid, Card, CardContent, CardActions, Button, Typography, TextField } from '@material-ui/core';
//import App from './Emoji';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Divider from '@material-ui/core/Divider'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      justify: 'space-evenly',
      alignItems: 'center',
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const statusHistory = [
  { id: 0, name: "Spongebob Squarepants", status: "/happy.jpg", message: "I'm ready!", image: "/spongebobpose.png" },
  { id: 1, name: "Squidward Tentacles", status: "/angry.png", message: "Leave me alone!", image: "/squidward.jfif" },
  { id: 2, name: "Patrick Star", status: "/sleepy.jpg", message: "I'm Sleepy", image: "/patrick.png" },
];

export default function Feed() {
  const classes = useStyles();
  const [ StatusList, setStatusList ]  = useState(statusHistory);
  const [ messageText, setMessageText ] = useState("");
  const [ idNum, setIdNum] = useState(statusHistory.length);

  function onClick() {
    const newStatusList = [{id: {idNum}, name:"Sheldon J. Plankton", status: "/evil.png", message: messageText, image: "/plankton.png" }, ...StatusList];
    setStatusList(newStatusList);
    setIdNum(newStatusList.length);
    setMessageText("");
  }

  return (
    <Grid container className={classes.root} >
      <Grid item xs={12} id="header">
      <img src={'/quickconnectnewlogo.png'}/>
      </Grid>

      <Grid container>
        <Grid item class="icon1 "id="icon" xs={2}>
          <UserIcon image="/plankton.png" status="/evil.png" />  
        </Grid>
        
        <Grid item xs={8} id="grid">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField value={messageText} onChange={(e) => {setMessageText(e.target.value || "")}} label="How are you feeling?" variant="outlined" id="statustextfield" /> 
          </form>
        </Grid>

        <Grid item xs>
          {/* <IconButton id="sharebutton" onClick={onClick} aria-label="send">
            <SendIcon />
          </IconButton>  */}
          <Button variant="contained" size="small" color="primary" id="sharebutton" onClick={onClick} aria-label="send">
            Update
          </Button>
        </Grid>
      </Grid>
    
      {
        StatusList.map(
          (status, ind) => 
            <Grid item xs={12}>
              <Card className="status-card">
                <CardContent>
                  <Grid container>
                    <Grid item xs={3}>
                      <UserIcon image={status.image} status={status.status} />
                    </Grid>

                    <Grid item xs={9} className="status-box">
                      <Grid item xs={12} className="status-name">
                        <Typography variant="h5" component="h1" >
                          {status.name}
                          {/* <IconButton aria-label = "emoji" >
                            <EmojiEmotionsIcon />
                          </IconButton> */}
                        </Typography>
                        </Grid>
                        {/* <Typography variant="h6" component="h2">
                          {status.status}
                        </Typography> */}
                        <Grid item xs={12} className="status-status">
                        <Typography variant="h7" component="p">
                          {status.message}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
        )
      }

      </Grid>
  );
}