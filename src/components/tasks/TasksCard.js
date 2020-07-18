import React, { useState } from 'react';
import { CardContent, CardActions, Grid, FormGroup, FormControl, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import UserIcon from '../profile/UserIcon';
import './Tasks.css';

export default function TasksCard(props) {

const { taskInfo } = props;
const [checked, setChecked] = React.useState([1]);
const isChecked = false;

const checkToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
    newChecked.push(value);
    } else {
    newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
};

return (
    <Grid container spacing = {3}>
        <Grid item xs={12}>
            <Card className="task-card">
                <CardContent>
                    <FormControl>                    
                    <FormControlLabel
                        //value={taskInfo.description}
                        control={<Checkbox
                            onChange={checkToggle(isChecked)}
                            checked={checked.indexOf(isChecked) !== -1}
                            // inputProps={{ 'aria-labelledby': labelId }}
                        />}
                        controlPlacement="start"
                        label={taskInfo.description}
                        labelPlacement="end"
                    />
                    </FormControl>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
)




}
