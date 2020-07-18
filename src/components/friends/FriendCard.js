import React from 'react';
import { CardContent, CardActions, Button, Typography, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import UserIcon from '../profile/UserIcon';

export default function FriendCard(props) {
  const { friendInfo } = props;

  return (
    <Card className="friend-card">
      <CardContent>
        <Grid container>
          <Grid item xs={3}>
            <UserIcon/>
          </Grid>

          <Grid item xs={9}>
            <Typography variant="h5" component="h1" id="card-name">
              <strong>{friendInfo.name}</strong>
            </Typography>

            <Typography component="h2" id="card-status">
              Status: {friendInfo.status}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions component="p">
        <Button href="/message">Message</Button>
      </CardActions>
    </Card>
  );
}