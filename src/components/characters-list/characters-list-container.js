import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
    getCharacters,
    incrementCurrentPage,
    toggleIsFetching
} from "../../redux/charactersReducer";

import CharactersList from './characters-list';

const CharactersListContainer = ({
                                     characters,
                                     total,
                                     currentPage,
                                     incrementCurrentPage,
                                     getCharacters,
                                     isFetching
                                 }) => {
    useEffect(() => {
        console.log(currentPage);
        getCharacters(currentPage);
    }, [currentPage]);

    return (
        <CharactersList
            characters={characters}
            total={total}
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
        total: state.total
    };
};

export default connect(mapStateToProps, {
    incrementCurrentPage,
    toggleIsFetching,
    getCharacters,
})(CharactersListContainer);
