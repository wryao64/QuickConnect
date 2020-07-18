import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import TasksCard from './TasksCard';
import './Tasks.css';

const initialStateValue = [
  { id: 0, description: "Take a break"},
  { id: 1, description: "Listen to music"},
  { id: 2, description: "Vacuum House"},
  { id: 3, description: "Meditate"},
  { id: 4, description: "Go for a run"}
];

export default function Tasks(props) {

  const [ TaskList, setTaskList ] = useState(initialStateValue);

  return (
    <Container id="tasks">
      <h1>Tasks</h1>
        {
          TaskList.map(
            (task, ind) => <TasksCard key={ind} taskInfo={task} onDelete={props.onDelete}/>
          )
        }   
    </Container>

  );
}