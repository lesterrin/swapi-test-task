import s from './characters-list-item.module.css';
import React from "react";

const CharactersListItem = ({name, birth_year, height, mass, gender}) => {

    let genderTag;

    if (gender === 'female') genderTag = s.violet;
    if (gender === 'male') genderTag = s.green;
    if (gender === 'hermaphrodite') genderTag = s.yellow;

    return (
        <div className={s.character_list_item}>
            <div className={s.title}>{name}</div>
            <div className={s.char_body}>
                {height !== 'unknown' && <div>
                    <div className={s.round}>{height}</div>
                    <div>height</div>
                </div>}
                {mass !== 'unknown' && <div>
                    <div className={s.round}>{mass}</div>
                    <div>mass</div>
                </div>}
            </div>
            <br/>
            <div>
                {genderTag && <span className={`${s.tag} ${genderTag}`}>{gender}</span>}
                <span className={`${s.tag} ${s.blue}`}>{birth_year}</span>
            </div>
        </div>
    )
}

export default CharactersListItem;
