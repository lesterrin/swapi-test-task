import s from './not-found.module.css';
import React from "react";
import star from '../../../assets/404.png';
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <img className={`${s.img} ${s.not_found}`} src={star}/>
                <NavLink to='/'>
                    <button className={s.return}>Return</button>
                </NavLink>
            </div>
        </div>
    )
}

export default NotFound;
