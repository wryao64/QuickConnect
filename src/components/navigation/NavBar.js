import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ListIcon from '@material-ui/icons/List';

export default function NavBar() {
  return (
    <nav id="nav-bar">
      <ul>
        <li>
        <Link to="/">  <HomeIcon class="icons"/> </Link>
           {/*<Link to="/">Feed</Link>*/}
            
        </li>
        <li>
            <Link to="/friends">  <PeopleIcon class="icons"/> </Link>
            
        </li>
        <li>
          <Link to="/tasks">  <ListIcon class="icons" /> </Link>

            {/*<Link to="/tasks">Tasks</Link>*/}
        </li>
        <li>
          {/* <Link to="/settings">  <img className="icons" icon={<SettingsIcon/>} alt ="settings" /> </Link> */}
          <Link to="/settings">  <SettingsIcon class="icons"/> </Link>

            {/*<Link to="/settings">Settings</Link>*/}
        </li> 
      </ul>
    </nav>
  );
}
