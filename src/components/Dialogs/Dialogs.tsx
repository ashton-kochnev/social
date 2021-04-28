import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import {DialogPageType} from "../../Redux/state";
import Message from "./Message/Message";

type DialogsType = {
    state: DialogPageType
}

const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogs = props.state.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;