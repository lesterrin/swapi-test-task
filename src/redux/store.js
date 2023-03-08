import { configureStore } from '@reduxjs/toolkit';

import charactersReducer from './charactersReducer';

const store = configureStore({
    reducer: charactersReducer,
});

export default store;
