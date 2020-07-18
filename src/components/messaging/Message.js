import React, { useState } from 'react';
import { Container, Card, CardContent, Typography } from '@material-ui/core';
import './Messaging.css';

const messageHistory = [
  { id: 0, name: "Me", message: "Hey" },
  { id: 1, name: "Johnny", message: "Hi" },
  { id: 1, name: "Johnny", message: "What's up?" }
];

export default function Message(props) {
  const { friendInfo } = props;
  const [ MessageHistory, setMessageHistory ]  = useState(messageHistory);

  return (
    <Container>
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
      {/* <form className={classes.root} noValidate autoComplete="off">
           <TextField value={messageText} onChange={(e) => {setMessageText(e.target.value || "")}} label="How are you feeling?" variant="outlined" id="textfield" /> 
        </form> */}
    </Container>
  );
}
