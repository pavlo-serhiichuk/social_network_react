import React from 'react'
import './Dialogs.css'
import {addMessage, updateMessage} from "../../../Redux/dialog_producer";
import Dialogs from "./Dialogs";

export default function DialogsContainer(props) {
    const addNewMessage = () => {
        props.store.dispatch(addMessage())
    }

    let onNewMessageChange = (e) => {
        props.store.dispatch(updateMessage(e))
    }

    return (
        <Dialogs updateMessage={onNewMessageChange} addMessage={addNewMessage} store={props.store}/>
    )
}