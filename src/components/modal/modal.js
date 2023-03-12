import React from "react";
import s from './modal.module.css';

import not_img from '../../assets/image 1.png';
import female_img from '../../assets/Icon male.png';
import male_img from '../../assets/Icon female.png';

const Modal = ({character, setIsOpen}) => {

    const {name, gender, mass, height, hair_color, skin_color, birth_year} = character;
    let genderTag;
    let img;

    switch (gender) {
        case 'female':
            genderTag = s.violet;
            img = female_img
            break;

        case 'male':
            genderTag = s.violet;
            img = male_img
            break;

        case 'hermaphrodite':
            genderTag = s.violet;
            img = not_img
            break;

        default:
            img = not_img;
            break;
    }

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
                            {genderTag && <span className={`${s.tag} ${genderTag}`}>{gender}</span>}
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
                            {height !== 'unknown' && <div>
                                <div className={s.round}>{height}</div>
                                <div>height</div>
                            </div>}
                            {mass !== 'unknown' && <div>
                                <div className={s.round}>{mass}</div>
                                <div>mass</div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;
