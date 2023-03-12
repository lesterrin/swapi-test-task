import {getCharactersData} from '../api/api';

const SET_CHARACTERS = 'SET-CHARACTERS';
const SET_TOTAL = 'SET-TOTAL';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const INITIALIZE_SUCCESS = 'INITIALIZE-SUCCESS';
const FILTER_PARAMS = 'FILTER-PARAMS';

const initialState = {
    charactersData: [],
    isFetching: false,
    currentPage: 1,
    totalCharacters: 0,
    isInitialized: false,
    filterParams: {property: 'name', value: 'all'}
};

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CHARACTERS:
            return {
                ...state,
                charactersData: [...action.charactersData],
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.targetPage,
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool,
            };

        case INITIALIZE_SUCCESS:
            return {
                ...state,
                isInitialized: true
            };

        case SET_TOTAL:
            return {
                ...state,
                totalCharacters: action.totalCharacters
            }

        case FILTER_PARAMS:
            return {
                ...state,
                filterParams: {property: action.property, value: action.value}
            }

        default:
            return state;
    }
};


export const setCharacters = (characters) => ({type: SET_CHARACTERS, charactersData: characters});

export const setTotalCharacters = (totalCharacters) => ({type: SET_TOTAL, totalCharacters});

export const setCurrentPage = (targetPage) => ({type: SET_CURRENT_PAGE, targetPage: targetPage});

export const toggleIsFetching = (bool) => ({type: TOGGLE_IS_FETCHING, bool});

export const setFilterParams = (property, value) => ({type: FILTER_PARAMS, property, value});

export const initializeSuccess = () => ({type: INITIALIZE_SUCCESS});

export const getCharacters = (currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        getCharactersData(currentPage).then((data) => {
            dispatch(initializeSuccess());
            dispatch(toggleIsFetching(false));
            dispatch(setCharacters(data.results));
            dispatch(setTotalCharacters(data.count))
        });
    };
};

export default charactersReducer;
