import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";
import {FriendsPageType} from "../../Redux/state";

type NavbarType = {
    state: FriendsPageType
}

const Navbar: React.FC<NavbarType> = (props) => {

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
            <Friends state={props.state.friends}/>
        </nav>
    )
}

export default Navbar;