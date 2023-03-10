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
                                     isStartPackInitialized,
                                     startPackSuccess
                                 }) => {
    useEffect(() => {
        getCharacters(currentPage);
    }, [currentPage]);

    if (isInitialized){
        return <CharactersList
                characters={characters}
                totalCharacters={totalCharacters}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isFetching={isFetching}
            />
    } else{
        return <Loader />
    }

};

const mapStateToProps = (state) => {
    return {
        characters: state.charactersData,
        currentPage: state.currentPage,
        isFetching: state.isFetching,
        totalCharacters: state.totalCharacters,
        isStartPackInitialized: state.isStartPackInitialized,
        isInitialized: state.isInitialized
    };
};

export default connect(mapStateToProps, {
    setCurrentPage,
    toggleIsFetching,
    getCharacters
})(CharactersListContainer);
