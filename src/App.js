import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Feed from './components/feed/Feed';
import Friends from './components/friends/Friends';
import Tasks from './components/tasks/Tasks';
import NavBar from './components/navigation/NavBar';
import Settings from './components/settings/Settings';
import Message from './components/messaging/Message';

const info = { id: 0, name: "Johnny", status: "Mood" };

function App() {
  return (
    <div className="App">
      <Grid container>
        <Router>
          <Grid item xs={12} id="content">
            <Switch>
              <Route exact
                path="/"
                component={() => (
                  <Feed />
                )}
              />

              <Route
                path="/friends"
                component={() => (
                  <Friends />
                )}
              />

              <Route
                path="/tasks"
                component={() => (
                  <Tasks />
                )}
              />

              <Route
                path="/settings"
                component={() => (
                  <Settings />
                )}
              />

              <Route
                path="/message"
                component={() => (
                  <Message friendInfo={info} />
                )}
              />
            </Switch>
          </Grid>

          <Grid item xs={12}>
            <NavBar />
          </Grid>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
