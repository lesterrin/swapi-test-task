import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
    changePage,
    getCharacters,
    toggleIsFetching
} from "../../redux/charactersReducer";

import CharactersList from './characters-list';

const CharactersListContainer = ({
                                     characters,
                                     totalCharacters,
                                     currentPage,
                                     changePage,
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
        return (
            <>
                <CharactersList
                    characters={characters}
                    totalCharacters={totalCharacters}
                    currentPage={currentPage}
                    changePage={changePage}
                    isFetching={isFetching}
                    captions={captions}
                />
            </>)
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
    changePage,
    toggleIsFetching,
    getCharacters
})(CharactersListContainer);
