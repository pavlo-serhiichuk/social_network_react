import React from 'react'
import './Dialogs.css'
import {NavLink} from "react-router-dom";

const UserDialog = (props) => {
    const path = '/dialog/' + props.id
    return (
        <div className="user-dialog">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className='message'>
            {props.content}
        </div>
    )
}

export default function Dialogs() {
    return (
        <div className="dialogs">
            <div className="users-dialogs">
                <UserDialog id="1" name="Li"/>
                <UserDialog id="2" name="Lo"/>
                <UserDialog id="3" name="Pi"/>
                <UserDialog id="4" name="Si"/>
            </div>
            <div className="messages">
                <Message content="Hello!"/>
                <Message content="Hi!"/>
                <Message content="Hello!"/>
                <Message content="Hello!"/>
            </div>
        </div>
    )
}