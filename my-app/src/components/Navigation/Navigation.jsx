import React from 'react'
import s from './Navigation.module.css'
import {NavLink, Router} from "react-router-dom";

const navStyle = `${s.active}`;

export default function Navigation() {
    return (
            <nav className={s.nav}>
                <div className={navStyle}>
                    <NavLink to="/profile" activeClassName={s.active}>My profile </NavLink>
                </div>
                <div className={navStyle}>
                    <NavLink to="/dialog" activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={navStyle}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={navStyle}>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className={navStyle}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>
    )

}

// {'\u00A0'}
// profile      fas fa-user
//messages     fas fa-envelope-open
//music        fas fa-play-circle
//news         fas fa-file-alt