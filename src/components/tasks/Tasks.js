import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import TasksCard from './TasksCard';
import './Tasks.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const initialStateValue = [
  { id: 0, description: "Take a break"},
  { id: 1, description: "Listen to music"},
  { id: 2, description: "Chat to friends"},
  { id: 3, description: "Meditate"},
  { id: 4, description: "Go for a run"}
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

  

export default function Tasks(props) {
  const classes = useStyles();
  const [ TaskList, setTaskList ] = useState(initialStateValue);

  return (
    <Container id="tasks">
      <h1>Tasks</h1>
        {
          TaskList.map(
            (task, ind) => <TasksCard key={ind} taskInfo={task} onDelete={props.onDelete}/>
          )
        }  
        <div className={classes.root}/>
        
        <div id="addicon">
          <Fab color="primary" aria-label="add" >
            <AddIcon />
          </Fab>
        </div>
    </Container>

  );
}