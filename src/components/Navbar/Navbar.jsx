import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/dialogs'>Messages</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/news'>News</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/music'>Music</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/settings'>Settings</NavLink>
                </li>
            </ul>
            <Friends state={props.state}/>
        </nav>
    )
}

export default Navbar;