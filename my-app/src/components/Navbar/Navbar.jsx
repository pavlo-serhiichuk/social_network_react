import React from 'react'
import s from './Navbar.module.css'

// console.log(s.nav__item)

export default function Navbar() {
    return (
        <nav className={s.nav}>

            <a className={s.nav__item} href="/">My profile</a>
            <a className={s.nav__item} href="/">Messages</a>
            <a className={s.nav__item} href="/">Music</a>
            <a className={s.nav__item} href="/">News</a>
        </nav>
    )
}

// {'\u00A0'}
// profile      fas fa-user
//messages     fas fa-envelope-open
//music        fas fa-play-circle
//news         fas fa-file-alt