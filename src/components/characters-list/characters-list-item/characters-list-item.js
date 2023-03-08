import s from './characters-list-item.module.css';
import React from "react";

const CharactersListItem = ({name, birth_year}) => {
    return (
        <div className={s.character_list_item}>
            <span>{name}</span>
            <span>{birth_year}</span>
        </div>
    )
}

export default CharactersListItem;
