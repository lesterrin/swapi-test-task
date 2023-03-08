import axios from 'axios';

const instance = axios.create({
    baseURL: `https://swapi.dev/api/`
});

const alertError = (e) => console.log(e);

export const getCharactersData = (currentPage) => {
    return instance
        .get(`people/`, {
            params: {
                page: currentPage
            }
        })
        .then((response) => response.data)
        .catch((e) => alertError(e));
}

/*export const getCharacterInfo = (id) => {
    return instance
        .get('people/', {
            params: {
                id: id
            }
        })
        .then((response) => response.data)
        .catch((e) => alertError(e));
}*/
