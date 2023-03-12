import { configureStore } from '@reduxjs/toolkit';

import charactersReducer from './charactersReducer';
import localizationReducer from "./localizationReducer";

const rootReducer = {characters: charactersReducer, localization: localizationReducer}

const store = configureStore({
    //reducer: charactersReducer,
    reducer: rootReducer
});

export default store;
