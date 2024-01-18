import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    changePage,
    getCharacters
} from "../../redux/charactersReducer";

import CharactersList from './characters-list';
import {
    selectCaptions,
    selectCharactersData, selectCurrentPage,
    selectFilterParams, selectIsFetching,
    selectIsInitialized,
    selectTotalCharacters
} from "../../selectors/charactersSelector";

const CharactersListContainer = () => {

    const dispatch = useDispatch();

    const changePageWrapper = (pageNumber) => {
        dispatch(changePage(pageNumber));
    };

    let characters = useSelector(selectCharactersData);
    const isInitialized = useSelector(selectIsInitialized);
    const filterParams = useSelector(selectFilterParams);
    const totalCharacters = useSelector(selectTotalCharacters);
    const currentPage = useSelector(selectCurrentPage);
    const isFetching = useSelector(selectIsFetching);
    const captions = useSelector(selectCaptions);

    useEffect(() => {
        dispatch(getCharacters(currentPage));
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
                    changePage={changePageWrapper}
                    isFetching={isFetching}
                    captions={captions}
                />
            </>)
    }

};

export default CharactersListContainer;
