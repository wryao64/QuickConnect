import React, { useState } from 'react';
import { Button, Container, Card, CardContent, Typography, TextField } from '@material-ui/core';
import './Messaging.css';
import { makeStyles } from '@material-ui/core/styles';

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

const messageHistory = [
  { id: 0, name: "Me", message: "Hey" },
  { id: 1, name: "Euegene Krabs", message: "Money! Money! Money!"},
  { id: 2, name: "Euegene Krabs", message: "Stop stealing my customers :("}
];

export default function Message(props) {
  const classes = useStyles();
  const { friendInfo } = props;
  const [ MessageHistory, setMessageHistory ]  = useState(messageHistory);
  const [ messageText, setMessageText ] = useState("");
  const [ idNum, setIdNum] = useState(messageHistory.length);

  function onClick() {
    const newMessageList = [...MessageHistory, {id: idNum, name: "Me", message: messageText}];
    setMessageHistory(newMessageList);
    setIdNum(newMessageList.length);
    setMessageText("");
  }

  return (
    <Container className="msg-container">
      <h1>{friendInfo.name}</h1>
      {
        MessageHistory.map(
          (message, ind) => 
            <Card className="message-card">
              <CardContent>
                <Typography>
                  {message.name}: {message.message}
                </Typography>
              </CardContent>
            </Card>
        )
      }
      <form className="textbox-align" noValidate autoComplete="off">
          <TextField value={messageText} onChange={(e) => {setMessageText(e.target.value || "")}} label="Enter message" variant="outlined" id="msg-textfield" /> 
          <Button variant="contained" color="primary" aria-label="send" onClick={onClick}>Enter</Button>
      </form>
    </Container>
  );
}
