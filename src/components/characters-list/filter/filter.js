import React, {useState} from "react";
import s from './filter.module.css';
import {connect} from "react-redux";

const Filter = ({characters}) => {

    //const fields = Object.keys(characters[0]).map(e => e.replace('_', ' '));
    const fields = Object.keys(characters[0]);
    const fieldsOptions = fields.map(e => <option value={e}>{e}</option>);

    const fieldSelector = React.createRef();

    const [selectedField, setSelectorField] = useState('name');

    const changeFieldSelectorHandler = () => {
        setSelectorField(fieldSelector.current.value); //допилить или убрать flux
        const fieldValues = characters.map(e=>e[selectedField]);
        console.log(fieldValues);
    }

    return (
        <div>
            <select ref={fieldSelector} onChange={changeFieldSelectorHandler}>
                {fieldsOptions}
            </select>
            <select>
                <option>All</option>
                <option>brown</option>
                <option>red</option>
                <option>blue</option>
                <option>white</option>
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
