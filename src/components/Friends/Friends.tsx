import React from 'react';
import classes from './Friends.module.css';
import Friend from "./Friend/Friend";
import {SidebarType} from "../../Redux/state";

type FriendsType = {
    state: Array<SidebarType>
}
const Friends: React.FC<FriendsType> = (props) => {
    const res = props.state.map((f: SidebarType) => {
        return <Friend key={f.id} id={f.id} link={f.link} name={f.name}/>
    })

    return (
        <div className={classes.friends}>
            <h3>Friends</h3>
            <div className={classes.ava}>
                {res}
            </div>
        </div>
    )
}

export default Friends;