import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Redux/state";

const DialogItem: React.FC<DialogType> = (props) => {
    return (
        <div className={classes.dialogs + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;