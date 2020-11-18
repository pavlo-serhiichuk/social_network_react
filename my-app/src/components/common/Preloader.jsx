import React from 'react'
import preloader from "../../assets/images/rolling.svg";
import s from './common.module.css'
const Preloader = (props) => {
    return (
        <div> { props.isFatching ? <img className={s.preloader} src={preloader}/> : null } </div>
    )
}

export default Preloader