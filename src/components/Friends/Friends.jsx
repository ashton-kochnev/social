import React from 'react';
import classes from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {

    const res = props.state.friends.map(f => <Friend src={f.link} name={f.name}/>)

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