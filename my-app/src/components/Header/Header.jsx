import React from 'react'
import './Header.css'
import {NavLink} from "react-router-dom";

export default function Header(props) {
    debugger
    return (
        <div className="header">
            <div className="header-content">
                <div className="title">Spirits</div>
                <div className="loginBlock">
                    {props.isAuth
                        ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    )
}