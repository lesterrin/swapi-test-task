import {useDispatch, useSelector} from "react-redux";
import {setFilterParams} from "../../redux/charactersReducer";
import React from "react";
import Filter from "./filter";
import {selectCharactersData, selectFilterParams, selectIsInitialized} from "../../selectors/charactersSelector";

const FilterContainer = () => {

    const dispatch = useDispatch();

    const characters = useSelector(selectCharactersData);
    const isInitialized = useSelector(selectIsInitialized);
    const filterParams = useSelector(selectFilterParams);

    const setFilterParamsWrapper = (params) => {
        dispatch(setFilterParams(params));
    }

    if (isInitialized) {
        return <Filter setFilterParams={setFilterParamsWrapper}
                       characters={characters}
                       isInitialized={isInitialized}
                       filterParams={filterParams}/>;
    }

}

export default FilterContainer;
