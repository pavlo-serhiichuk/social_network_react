import React from 'react'
import './UserDialog.css'
import {NavLink} from "react-router-dom";

const UserDialog = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className="user-dialog">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default UserDialog