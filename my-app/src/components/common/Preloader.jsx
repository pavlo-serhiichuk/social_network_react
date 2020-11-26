import React from 'react'
import preloader from "../../assets/images/rolling.svg";
import s from './common.module.css'
const Preloader = () => {
    return (
        <div><img className={s.preloader} src={preloader} alt=""/></div>
    )
}

export default Preloader