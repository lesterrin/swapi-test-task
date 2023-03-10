import React, {useState} from "react";
import s from './characters-list.module.css';
import CharactersListItem from "./characters-list-item/characters-list-item";
import Loader from "../loader/loader";
import Filter from "./filter/filter";
import Paginator from "./paginator/paginator";
import Modal from "../modal/modal";

const CharactersList = ({characters, totalCharacters, currentPage, setCurrentPage, isFetching}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [charId, setCharId] = useState(0);

    console.log(isFetching, characters);

    const openModal = (id) => {
        setIsOpen(true);
        setCharId(id);
    }


    const charactersItems = characters.map(({name, height, mass, gender, hair_color, birth_year}, cid) => {
        return (
            <div className={s.item_wrapper} onClick={() => openModal(cid)}>
                <CharactersListItem
                    key={cid}
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
            {isOpen ? <Modal setIsOpen={setIsOpen} character={characters[charId]}/> : null}

            {!isFetching ? (
                <div>
                    <div className={s.title}>{totalCharacters} Peoples for you to choose your favorite</div>
                    <br/>
                    <Filter/>
                    <br/>
                    <div className={s.characters_list}>
                        {charactersItems}
                    </div>
                    <div className={s.paginator_wrapper}>
                        <Paginator totalCharacters={totalCharacters} currentPage={currentPage}
                                   setCurrentPage={setCurrentPage}/>

                    </div>
                </div>
            ) : (
                <div className={s.paginator_wrapper}>
                    <Loader/>
                </div>
            )}
        </div>
    )
}

export default CharactersList;
