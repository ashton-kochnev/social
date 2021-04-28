import React from 'react';
import classes from './../Dialogs.module.css';
import {MessageType} from "../../../Redux/state";

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={classes.messages}>
            {props.message}
        </div>
    )
}

export default Message;