import React from "react";
import s from './modal.module.css';

import not_img from '../../assets/image 1.png';
import female_img from '../../assets/Icon male.png';
import male_img from '../../assets/Icon female.png';

const Modal = ({character, setIsOpen}) => {

    const {name, gender, mass, height, hair_color, skin_color,  birth_year} = character;
    let genderTag;
    let img;

    if (gender === 'female') {
        genderTag = s.violet;
        img = female_img
    }
    if (gender === 'male') {
        genderTag = s.green;
        img = male_img
    }
    if (gender === 'hermaphrodite') {
        genderTag = s.yellow;
        img = not_img;
    }
    if (gender === 'n/a') img = not_img;

    return (
        <>
            <div className={s.dark_bg} onClick={() => setIsOpen(false)}/>
            <div className={s.centered}>
                <button className={s.close_btn} onClick={() => setIsOpen(false)}>
                    X
                </button>
                <div className={s.modal}>
                    <div className={s.l_clm}>
                        <img className={s.img} src={img}/>
                        <div className={s.tags}>
                            {genderTag ? <span className={`${s.tag} ${genderTag}`}>{gender}</span> : null}
                            <span className={`${s.tag} ${s.blue}`}>{birth_year}</span>
                        </div>
                    </div>
                    <div className={s.r_clm}>
                        <div className={s.name}>{name}</div>
                        <div className={s.firs_params}>
                            <p>hair color: {hair_color}</p>
                            <p>skin color: {skin_color}</p>
                            <p></p>
                        </div>
                        <div className={s.second_params}>
                            <div>
                                <div className={s.round}>{height}</div>
                                <div>height</div>
                            </div>
                            <div>
                                <div className={s.round}>{mass}</div>
                                <div>mass</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;