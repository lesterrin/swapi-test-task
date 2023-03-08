import s from './characters-list-item.module.css';
import React from "react";

const CharactersListItem = ({name, birth_year,height,mass,gender}) => {
    return (
        <div className={s.character_list_item}>
            <div>{name}</div>
            <div>{birth_year}</div>
            <div>{height}</div>
            <div>{mass}</div>
            <div>{gender}</div>
        </div>
    )
}

export default CharactersListItem;
