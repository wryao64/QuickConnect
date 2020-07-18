import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Feed.css';
import UserIcon from '../profile/UserIcon';
import { Grid, Card, CardContent, CardActions, Button, Typography, TextField } from '@material-ui/core';
//import App from './Emoji';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  }
}));

const statusHistory = [
  { id: 0, name: "Jane Doe", status: "Happy", message: "I'm happy" },
  { id: 1, name: "Hoonald", status: "Sad", message: "I want friends" },
  { id: 2, name: "John", status: "Lazy", message: "Zzz" },
];

export default function Feed() {
  const classes = useStyles();
  const [ StatusList, setStatusList ]  = useState(statusHistory);
  const [ messageText, setMessageText ] = useState("");
  const [ idNum, setIdNum] = useState(statusHistory.length);

  function onClick() {
    const newStatusList = [{id: {idNum}, name:"Shaq", status: "Excited", message:messageText }, ...StatusList];
    setStatusList(newStatusList);
    setIdNum(newStatusList.length);
    setMessageText("");
  }

  return (
    <Grid container className={classes.root} >
      <Grid item xs={12} id="header">
        <h1>LOGO</h1>
      </Grid>

      <Grid container>
        <Grid item class="icon1 "id="icon" xs={2}>
          <UserIcon />  
        </Grid>
        
        <Grid item xs={8} id="grid">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField value={messageText} onChange={(e) => {setMessageText(e.target.value || "")}} label="How are you feeling?" variant="outlined" id="textfield" /> 
          </form>
        </Grid>

        <Grid item xs={2}>
          <IconButton id="sharebutton" onClick={onClick} aria-label="send">
            <SendIcon />
          </IconButton> 
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
                      <UserIcon/>
                    </Grid>

                    <Grid item xs={9}>
                      <Typography variant="h5" component="h1">
                        {status.name}
                        <IconButton aria-label = "emoji" >
                          <EmojiEmotionsIcon />
                        </IconButton>
                      </Typography>
                      
                      <Typography variant="h6" component="h2">
                        {status.status}
                      </Typography>

                      <Typography component="p">
                        {status.message}
                      </Typography>
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