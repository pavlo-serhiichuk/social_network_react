import React from 'react'
import s from './Navigation.module.css'
import {NavLink, Router} from "react-router-dom";


export default function Navigation(props) {
    let si = props.state
// debugger
    return (
        <nav className={s.navigation}>
            <div className={s.itemsContainer}>
                <NavLink to="/profile" activeClassName={s.active}>{si.myProfile} </NavLink>
                <NavLink to="/dialogs" activeClassName={s.active}>{si.dialogs}</NavLink>
                <NavLink to="/music" activeClassName={s.active}>{si.music}</NavLink>
                <NavLink to="/news">{si.news}</NavLink>
                <NavLink to="/settings" activeClassName={s.active}>{si.settings}</NavLink>
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

// {'\u00A0'}
// profile      fas fa-user
//messages     fas fa-envelope-open
//music        fas fa-play-circle
//news         fas fa-file-alt