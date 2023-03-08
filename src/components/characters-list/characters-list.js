import React from "react";
import s from './characters-list.module.css';
import CharactersListItem from "./characters-list-item/characters-list-item";
import Loader from "../loader/loader";

const CharactersList = ({characters, setCharacters, incrementCurrentPage, isFetching}) => {

    const charactersItems = characters.map(({id, name, height, mass, gender, hair_color, birth_year}) => {
        return (
            <CharactersListItem
                key={id}
                name={name}
                height={height}
                mass={mass}
                gender={gender}
                hair_color={hair_color}
                birth_year={birth_year}
            />
        );
    });
    return (
        <>
            <div>Characters List</div>
            <div className={`${s.characters_list} ${s.container}`}>
                {charactersItems}
            </div>
            <div className={s.more_wrapper}>
                {isFetching ? (
                    <Loader/>
                ) : (
                    <button className={s.more_btn} onClick={incrementCurrentPage}>
                        Загрузить ещё
                    </button>
                )}
            </div>
        </>
    )
}

export default CharactersList;
