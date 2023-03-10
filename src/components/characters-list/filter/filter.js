import React, {useState, useEffect} from "react";
import s from './filter.module.css';
import {connect} from "react-redux";

const Filter = ({characters}) => { //переместить на один уровень с контейнером списка

    const fieldSelector = React.createRef();
    const [selectedField, setSelectedField] = useState('name');

    let filterParams = characters.map(e=>e.name);
    filterParams = [...new Set(filterParams)];
    filterParams = filterParams.map(e=><option value={e}>{e}</option>);

    const [filteredParams, setFilteredParams] = useState(filterParams);




    const [inc,setInc] = useState(1)


    //const fields = Object.keys(characters[0]).map(e => e.replace('_', ' '));
    const fields = Object.keys(characters[0]);
    //const fieldsOptions = fields.map(e => <option value={e}>{e}</option>);

    const changeFieldSelectorHandler = () => {
        filterParams = characters.map(e=>e[fieldSelector.current.value]);
        filterParams = [...new Set(filterParams)];
        filterParams = filterParams.map(e => <option value={e}>{e}</option>);
        setFilteredParams(filterParams);
    }

    return (
        <div>
            <select ref={fieldSelector} onChange={changeFieldSelectorHandler}>
                <option value='name'>name</option>
                <option value='height'>height</option>
                <option value='mass'>mass</option>
                <option value='hair_color'>hair color</option>
                <option value='skin_color'>skin color</option>
                <option value='eye_color'>eye color</option>
                <option value='birth_year'>birth year</option>
                <option value='gender'>gender</option>
            </select>
            <select>
                <option>All</option>
                {filteredParams}
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.charactersData
    };
};

export default connect(mapStateToProps)(Filter);
