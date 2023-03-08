import { getCharactersData } from '../api/api';

const SET_CHARACTERS = 'SET-CHARACTERS';
const SET_TOTAL = 'SET-TOTAL';
const INCREMENT_CURRENT_PAGE = 'INCREMENT-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = { charactersData: [], isFetching: false, currentPage: 1, total: 0 };

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CHARACTERS:
            return {
                ...state,
                charactersData: [...state.charactersData, ...action.charactersData],
            };

        case INCREMENT_CURRENT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool,
            };

        case SET_TOTAL:
            return {
                ...state,
                total: action.total
            }

        default:
            return state;
    }
};


export const setCharacters = (characters) => ({ type: SET_CHARACTERS, charactersData: characters });
export const setTotal = (total) => ({ type: SET_TOTAL, total });

export const incrementCurrentPage = () => ({ type: INCREMENT_CURRENT_PAGE });

export const toggleIsFetching = (bool) => ({ type: TOGGLE_IS_FETCHING, bool });


export const getCharacters = (currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        getCharactersData(currentPage).then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setCharacters(data.results));
            dispatch(setTotal(data.count))
        });
    };
};

export default charactersReducer;
