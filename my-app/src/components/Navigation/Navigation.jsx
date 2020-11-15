import React from 'react'
import s from './Navigation.module.css'
import {NavLink, Router} from "react-router-dom";
import {connect} from 'react-redux'

// debugger
// const mapStateToProps = () => ({ sidebar: store.getState().sidebar })
// const NavContainer = connect(mapStateToProps)(Navigation)

export default function Navigation(props) {
    // debugger
    // let state = props.store.getState().sidebar
    return (
        <nav className={s.navigation}>
            <div className={s.itemsContainer}>
                <NavLink to="/profile" activeClassName={s.active}>My profile </NavLink>
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

// {'\u00A0'}
// profile      fas fa-user
//messages     fas fa-envelope-open
//music        fas fa-play-circle
//news         fas fa-file-alt