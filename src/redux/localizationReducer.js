import {createSlice} from "@reduxjs/toolkit";

//const TOGGLE_LANGUAGE = 'TOGGLE-LANGUAGE';

const initialState = {
    language: 'en',
    captions: {
        en: {
            navbar: {
                home: 'Home',
                characters: 'Characters'
            },
            home: {
                title: 'Find all your favorite character',
                subtitle: 'You can find out all the information about your favorite characters',
                more: 'See more...'
            },
            not_found: {
                return: 'Return'
            },
            characters: {
                title: 'Peoples for you to choose your favorite',
                previous: 'previous',
                next: 'next'
            }
        },
        wookie: {
            navbar: {
                home: 'Hooscwo',
                characters: 'Cacrarcraoaaoworcc'
            },
            home: {
                title: 'Fahwhwa raanan rooohurc wwrahooorcahaowo oaacrarcraoaaoworc',
                subtitle: 'Yoohu oarawh wwahwhwa oohuao raanan aoacwo ahwhwwoorcscraaoahoowh rarhoohuao rooohurc wwrahooorcahaowo oaacrarcraoaaoworcc',
                more: 'Swowo scoorcwo...'
            },
            not_found: {
                return: 'Rwoaohurcwh'
            },
            characters: {
                title: 'Pwoooakanwoc wwoorc rooohu aooo oaacoooocwo rooohurc wwrahooorcahaowo',
                previous: 'akrcwohoahoohuc',
                next: 'whwokao'
            }
        }
    },
    selectedCaptions: null
};

initialState.selectedCaptions = initialState.captions[initialState.language];

const localizationSlice = createSlice({
    name: 'localization',
    initialState: initialState,
    reducers: {
        toggleLanguage(state, action) {
            const lang = state.language === 'en' ? 'wookie' : 'en';
            state.language = lang;
            state.selectedCaptions = state.captions[lang];
        }
    },
});

/*export const toggleLanguage = createAction('TOGGLE-LANGUAGE');

const localizationReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(toggleLanguage, (state, action) => {
            const lang = state.language === 'en' ? 'wookie' : 'en';
            state.language = lang;
            state.selectedCaptions = state.captions[lang];
        })
});*/

/*const localizationReducer2 = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_LANGUAGE:

            const lang = state.language === 'en' ? 'wookie' : 'en';

            return {
                ...state,
                language: lang,
                selectedCaptions: state.captions[lang]
            };

        default:
            return state;
    }
};*/

//export const toggleLanguage = () => ({type: TOGGLE_LANGUAGE});

//export default localizationReducer;

const { actions, reducer } = localizationSlice;

export const {
    toggleLanguage
} = actions;

export default reducer;
