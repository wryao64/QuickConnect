import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import FriendCard from './FriendCard';
import './Friends.css';

const initialStateValue = [
  { id: 0, name: "Jenny Tulls", status: "Happy" },
  { id: 1, name: "Kimmy Hed", status: "Sad" }
];

export default function Friends() {
  // eslint-disable-next-line no-unused-vars
  const [ FriendList, setFriendList ]  = useState(initialStateValue);

  return (
    <Container>
      <h1>Friends</h1>
      {
        FriendList.map(
          (friend, ind) => <FriendCard key={ind} friendInfo={friend}/>
        )
      }
    </Container>
  );
}