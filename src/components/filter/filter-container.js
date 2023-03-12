import {connect} from "react-redux";
import {setFilterParams} from "../../redux/charactersReducer";
import React from "react";
import Filter from "./filter";

const FilterContainer = (props) => {
    if (props.isInitialized) {
        return <Filter {...props}/>;
    }

}

const mapStateToProps = ({characters}) => {
    return {
        characters: characters.charactersData,
        isInitialized: characters.isInitialized,
        filterParams: characters.filterParams
    };
};

export default connect(mapStateToProps,{setFilterParams})(FilterContainer);
