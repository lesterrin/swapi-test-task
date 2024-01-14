import {getCharactersData} from '../api/api';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    charactersData: [],
    isFetching: false,
    currentPage: 1,
    totalCharacters: 0,
    isInitialized: false,
    filterParams: {property: 'name', value: 'all'}
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState: initialState,
    reducers: {
        setCharacters(state, action) {
            state.charactersData = [...action.payload];
        },
        setTotalCharacters(state, action) {
            state.totalCharacters = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        toggleIsFetching(state, action) {
            state.isFetching = action.payload;
        },
        setFilterParams(state, action) {
            console.log(action.payload);
            state.filterParams = {property: action.payload.property, value: action.payload.value};
        },
        initializeSuccess(state) {
            state.isInitialized = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCharacters.pending, (state) => {
                charactersSlice.caseReducers.toggleIsFetching(state,{payload: false});
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                charactersSlice.caseReducers.initializeSuccess(state);
                charactersSlice.caseReducers.toggleIsFetching(state,{payload: false});
                charactersSlice.caseReducers.setCharacters(state,{payload: action.payload.results});
                charactersSlice.caseReducers.setTotalCharacters(state,{payload: action.payload.count});
                //state.isInitialized = true;
                //state.isFetching = false;
                //state.charactersData = [...action.payload.results];
                //state.totalCharacters = action.payload.count;

            })
            .addCase(getCharacters.rejected, (state, action) => {
                alert('Ошибка загрузки данных с сервера');
            });
    }
});

const { actions, reducer } = charactersSlice;

export const {
    setCurrentPage,
    toggleIsFetching,
    setFilterParams
} = actions;

//переписать
export const changePage = (targetPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(targetPage));
        dispatch(setFilterParams({property: 'name', value: 'all'}));
    }
}

export const getCharacters = createAsyncThunk(
    'characters/getCharactersData', //
    async (currentPage) => {
        console.log(currentPage);
        return await getCharactersData(currentPage);
    }
);

export default reducer;