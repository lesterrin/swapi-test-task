import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
    getCharacters,
    setCurrentPage, startPackSuccess,
    toggleIsFetching
} from "../../redux/charactersReducer";

import CharactersList from './characters-list';

const CharactersListContainer = ({
                                     characters,
                                     totalCharacters,
                                     currentPage,
                                     setCurrentPage,
                                     getCharacters,
                                     isFetching,
                                     isStartPackInitialized,
                                     startPackSuccess
                                 }) => {
    useEffect(() => {
            getCharacters(currentPage);
    }, [currentPage]);

    return (
        <CharactersList
            characters={characters}
            totalCharacters={totalCharacters}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isFetching={isFetching}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        characters: state.charactersData,
        currentPage: state.currentPage,
        isFetching: state.isFetching,
        totalCharacters: state.totalCharacters,
        isStartPackInitialized: state.isStartPackInitialized
    };
};

export default connect(mapStateToProps, {
    setCurrentPage,
    toggleIsFetching,
    getCharacters,
    startPackSuccess
})(CharactersListContainer);
