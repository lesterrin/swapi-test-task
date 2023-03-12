import React from "react";
import s from './home.module.css';

import yoda from '../../../assets/BannerComplete.png';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Home = ({captions}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.l_col}>
                    <div className={s.title}>{captions.title}</div>
                    <div className={s.description}>{captions.subtitle}</div>
                    <NavLink to='characters'>
                        <button className={s.more}>{captions.more}...</button>
                    </NavLink>
                </div>
                <div className={s.r_col}>
                    <img className={s.yoda} src={yoda}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({localization}) => ({
    captions: localization.selectedCaptions.home
})

export default connect(mapStateToProps)(Home);
