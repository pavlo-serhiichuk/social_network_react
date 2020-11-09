import React from 'react'
import s from './Navigation.module.css'
import {NavLink, Router} from "react-router-dom";

export default function Navigation() {
    return (
        <nav className={s.navigation}>
            <div className={s.itemsContainer}>
                <NavLink to="/profile" activeClassName={s.active}>My profile </NavLink>
                <NavLink to="/dialog" activeClassName={s.active}>Messages</NavLink>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.addEvent}>
                Add event
                Add event
            </div>
        </nav>
    )

}

// {'\u00A0'}
// profile      fas fa-user
//messages     fas fa-envelope-open
//music        fas fa-play-circle
//news         fas fa-file-alt