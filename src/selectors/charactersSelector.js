export const selectCharactersData = (state) => state.characters.charactersData;
export const selectIsInitialized = (state) => state.characters.isInitialized;
export const selectFilterParams = (state) => state.characters.filterParams;
export const selectCurrentPage = (state) => state.characters.currentPage;
export const selectIsFetching = (state) => state.characters.isFetching;
export const selectTotalCharacters = (state) => state.characters.totalCharacters;
export const selectCaptions = (state) => state.localization.selectedCaptions.characters;
