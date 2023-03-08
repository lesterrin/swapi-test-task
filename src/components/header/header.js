import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/sw-logo.png'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${s.container} ${s.inline}`}>
                <div className={s.logo}><img src={logo}/></div>
                <div className={s.navigation_block}>
                    <NavLink to='/'>
                        {({isActive}) => (
                            <div className={isActive ? `${s.active} ${s.item}` : s.item}>Home</div>
                        )}
                    </NavLink>
                    <NavLink to='characters'>
                        {({isActive}) => (
                            <div className={isActive ? `${s.active} ${s.item}` : s.item}>Characters</div>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Header;
