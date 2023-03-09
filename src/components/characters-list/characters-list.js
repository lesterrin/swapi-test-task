import React, {useState} from "react";
import s from './characters-list.module.css';
import CharactersListItem from "./characters-list-item/characters-list-item";
import Loader from "../loader/loader";
import Filter from "./filter/filter";
import Paginator from "./paginator/paginator";
import Modal from "../modal/modal";

const CharactersList = ({characters, totalCharacters, currentPage, setCurrentPage, isFetching}) => {
    const [isOpen, setIsOpen] = useState(false);

    const charactersItems = characters.map(({id, name, height, mass, gender, hair_color, birth_year}) => {
        return (
            <div className={s.item_wrapper} onClick={() => setIsOpen(true)}>
                <CharactersListItem
                    key={id}
                    name={name}
                    height={height}
                    mass={mass}
                    gender={gender}
                    hair_color={hair_color}
                    birth_year={birth_year}
                />
            </div>
        );
    });

    return (
        <div className={s.container}>
            {isOpen ? <Modal setIsOpen={setIsOpen} characters={characters}/> : null}
            <div className={s.title}>{totalCharacters} Peoples for you to choose your favorite</div>
            <br/>
            <Filter/>
            <br/>
            <div className={s.characters_list}>
                {charactersItems}
            </div>
            <div className={s.paginator_wrapper}>
                {isFetching ? (
                    <Loader/>
                ) : (
                    <Paginator totalCharacters={totalCharacters} currentPage={currentPage}
                               setCurrentPage={setCurrentPage}/>
                )}
            </div>
        </div>
    )
}

export default CharactersList;
