import React from 'react'
import s from './Navigation.module.css'
import {NavLink, Router} from "react-router-dom";

export default function Navigation(props) {
    return (
        <nav className={s.navigation}>
            <div className={s.itemsContainer}>
                <NavLink to="/profile" activeClassName={s.active}>My profile </NavLink>
                <NavLink to="/users" activeClassName={s.active}>My friends </NavLink>
                <NavLink to="/dialogs" activeClassName={s.active}>Dialog</NavLink>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/settings" activeClassName={s.active}>Sittings</NavLink>
            </div>
            <div className={s.addEventContainer}>
                <button className={s.addEvent}>
                    <p>Add event</p>
                    <p>+</p>
                </button>
            </div>
        </nav>
    )

}
