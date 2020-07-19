import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import FriendCard from './FriendCard';
import './Friends.css';

const initialStateValue = [
  { id: 0, name: "Sandy Cheeks", status: "Yeehaw", image: "/sandycheeks.jfif", statusimage: "/runningshoe.png"},
  { id: 1, name: "Eugene Krabs", status: "Hungry", image: "/mrkrabs.png", statusimage: "/hungry.jfif" }
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