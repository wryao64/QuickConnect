import React from 'react';
import { 
    Avatar,
    Badge
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

export default function UserIcon() {
  const classes = useStyles();

  return (
    <Badge
      overlap="circle"
      anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
      }}
      
      badgeContent={<SmallAvatar alt="Remy Sharp" src="/spongebob.png" />}
    >
      <Avatar alt="SpongeBob" src="/spongebob.png" className={classes.large} />
    </Badge>
  );
}
