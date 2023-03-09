import React from "react";
import s from './modal.module.css';

const Modal = ({characters, setIsOpen}) => {
    console.log(characters);
    return (
        <>
            <div className={s.dark_bg} onClick={() => setIsOpen(false)}/>
            <div className={s.centered}>
                <button className={s.close_btn} onClick={() => setIsOpen(false)}>
                    X
                </button>
                <div className={s.modal}>
                    <div className={s.l_clm}>
                        <img/>
                        <div className={s.tags}></div>
                    </div>
                    <div className={s.r_clm}>
                        <h3>Name</h3>
                        <div className={s.firs_params}></div>
                        <div className={s.second_params}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;