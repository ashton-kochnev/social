import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='sveta' id='1'/>
                <DialogItem name='sasha' id='2'/>
                <DialogItem name='anton' id='3'/>
                <DialogItem name='yura' id='4'/>
            </div>
            <div className={classes.messages}>
                <Message message='hi'/>
                <Message message='yo'/>
                <Message message='no'/>
                <Message message='ahahaah'/>
            </div>
        </div>
    )
}

export default Dialogs;