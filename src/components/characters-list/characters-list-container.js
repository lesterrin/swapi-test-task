import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
    getCharacters,
    setCurrentPage,
    toggleIsFetching
} from "../../redux/charactersReducer";

import CharactersList from './characters-list';
import Loader from "../loader/loader";

const CharactersListContainer = ({
                                     characters,
                                     totalCharacters,
                                     currentPage,
                                     setCurrentPage,
                                     getCharacters,
                                     isFetching,
                                     isInitialized,
                                     filterParams,
                                     captions
                                 }) => {
    useEffect(() => {
        getCharacters(currentPage);
    }, [currentPage]);

    if (filterParams.value !== 'all') {
        characters = characters.filter(e => e[filterParams.property] === filterParams.value);
    }

    if (isInitialized) {
        return <CharactersList
            characters={characters}
            totalCharacters={totalCharacters}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isFetching={isFetching}
            captions={captions}
        />
    } else {
        return <Loader/>
    }

};

const mapStateToProps = ({characters, localization}) => ({
    characters: characters.charactersData,
    currentPage: characters.currentPage,
    isFetching: characters.isFetching,
    totalCharacters: characters.totalCharacters,
    isStartPackInitialized: characters.isStartPackInitialized,
    isInitialized: characters.isInitialized,
    filterParams: characters.filterParams,
    captions: localization.selectedCaptions.characters
});

export default connect(mapStateToProps, {
    setCurrentPage,
    toggleIsFetching,
    getCharacters
})(CharactersListContainer);
