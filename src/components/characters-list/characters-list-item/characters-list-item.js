import s from './characters-list-item.module.css';
import React from "react";

const CharactersListItem = ({name, birth_year, height, mass, gender}) => {

    let genderTag;

    if (gender === 'female') genderTag = s.violet;
    if (gender === 'male') genderTag = s.green;
    if (gender === 'hermaphrodite') genderTag = s.yellow;

    return (
        <div className={s.character_list_item}>
            <h3><b>{name}</b></h3>
            <div className={s.char_body}>
                <div><div className={s.round}>{height}</div><div>height</div></div>
                <div><div className={s.round}>{mass}</div><div>mass</div></div>
            </div>
            <br/>
            <div>
                <span className={`${s.tag} ${genderTag}`}>{gender}</span>
                <span className={`${s.tag} ${s.blue}`}>{birth_year}</span>
            </div>
        </div>
    )
}

export default CharactersListItem;
