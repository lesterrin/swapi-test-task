import React, {useState} from "react";
import s from './characters-list.module.css';
import CharactersListItem from "./characters-list-item/characters-list-item";
import Loader from "../loader/loader";
import Paginator from "./paginator/paginator";
import Modal from "../modal/modal";
import FilterContainer from "../filter/filter-container";

const CharactersList = ({characters, totalCharacters, currentPage, changePage, isFetching, captions}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [charId, setCharId] = useState(0);

    const openModal = (id) => {
        setIsOpen(true);
        setCharId(id);
    }

    const charactersItems = characters.map(({name, height, mass, gender, hair_color, birth_year}, cid) => {
        return (
            <div key={cid} className={s.item_wrapper} onClick={() => openModal(cid)}>
                <CharactersListItem
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
        <div>
            {!isFetching ? (
                <>
                    <FilterContainer/>
                    <div className={s.characters_list}>
                        {charactersItems}
                    </div>
                    <div className={s.paginator_wrapper}>
                        <Paginator totalCharacters={totalCharacters} currentPage={currentPage}
                                   changePage={changePage} captions={captions}/>
                    </div>
                    {isOpen ? <Modal setIsOpen={setIsOpen} character={characters[charId]}/> : null}
                </>
            ) : (
                <div className={s.paginator_wrapper}>
                    <Loader/>
                </div>
            )}
        </div>
    )
}

export default CharactersList;
