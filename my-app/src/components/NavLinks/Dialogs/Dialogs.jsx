import React from 'react'
import './Dialogs.css'
import Message from './Message/Message'
import UserDialog from './UserDialog/UserDialog'
import {addMessage, updateMessage} from "../../../Redux/dialog_producer";

export default function Dialogs(props) {
    let AllDialogs = props.dialogsPage.dialogs.map(d => <UserDialog key={d.id} id={d.id} name={d.name}/>)
    let AllMessages = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = () => {
        props.dispatch(addMessage())
    }

    let onNewMessageChange = (e) => {
        props.dispatch(updateMessage(e.target.value))
    }

    return (
        <div className="dialogs">
            <div className="users-dialogs">
                {AllDialogs}
            </div>
            <div>
                <div className="messages">
                    <div>
                        <img className="little-avatar"
                             src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt=""/>
                    </div>
                    <div className="create-text">
                        <input className='enter-post' type="text" placeholder='Share your thoughts...'
                               onChange={onNewMessageChange}
                                value={props.dialogsPage.newMessageText}
                        />
                        <button onClick={addNewMessage} className='share-post fas fa-paper-plane'>
                        </button>
                    </div>
                </div>
                {AllMessages}
            </div>
        </div>
    )
}