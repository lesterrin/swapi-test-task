import React from "react";
import s from './header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/sw-logo.png'
import {connect} from "react-redux";

const Header = ({captions}) => {
    return (
        <div className={s.header}>
            <div className={`${s.container} ${s.inline}`}>
                <div className={s.logo}><img src={logo}/></div>
                <div className={s.navigation_block}>
                    <NavLink to='/'>
                        {({isActive}) => (
                            <div className={isActive ? `${s.active} ${s.item}` : s.item}>{captions.home}</div>
                        )}
                    </NavLink>
                    <NavLink to='characters'>
                        {({isActive}) => (
                            <div className={isActive ? `${s.active} ${s.item}` : s.item}>{captions.characters}</div>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({localization}) => ({
    captions: localization.selectedCaptions.navbar
})

export default connect(mapStateToProps,{})(Header);
