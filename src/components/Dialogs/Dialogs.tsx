import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import {ActionsType, addMessageActionCreator, DialogPageType, updateNewMessageActionCreator} from "../../Redux/state";
import Message from "./Message/Message";

type DialogsType = {
    messagesPage: DialogPageType
    dispatch: (action: ActionsType) => void
    // addMessage: (message: string) => void
    // updateNewMessage: (message: string) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogs = props.messagesPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.messagesPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

    const addMessage = () => {
        props.dispatch(addMessageActionCreator(props.messagesPage.newMessage))
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageActionCreator(e.currentTarget.value))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogs}</div>
            <div className={classes.messages}>{messagesElements}</div>
            <div>
                <textarea onChange={onMessageChange} value={props.messagesPage.newMessage}/>
            </div>
            <div>
                <button onClick={addMessage}>add post</button>
            </div>
        </div>
    )
}

export default Dialogs;