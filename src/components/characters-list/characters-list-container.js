import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
    getCharacters,
    incrementCurrentPage,
    setCharacters,
    toggleIsFetching
} from "../../redux/charactersReducer";

import CharactersList from './characters-list';

const CharactersListContainer = ({
                                     characters,
                                     setCharacters,
                                     currentPage,
                                     incrementCurrentPage,
                                     getCharacters,
                                     isFetching
                                 }) => {
    useEffect(() => {
        getCharacters(currentPage);
    }, [currentPage]);

    return (
        <CharactersList
            characters={characters}
            setCharacters={setCharacters}
            incrementCurrentPage={incrementCurrentPage}
            isFetching={isFetching}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        characters: state.charactersData,
        currentPage: state.currentPage,
        isFetching: state.isFetching,
    };
};

export default connect(mapStateToProps, {
    setCharacters,
    incrementCurrentPage,
    toggleIsFetching,
    getCharacters,
})(CharactersListContainer);
