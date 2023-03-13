import React, {useState, useEffect} from "react";
import s from './filter.module.css';

const Filter = ({characters, setFilterParams, filterParams}) => {

    const {property, value} = filterParams;

    const charPropertiesSelector = React.createRef();
    const valueSelector = React.createRef();

    const [valuesSelectorOptions, setValuesSelectorOptions] = useState(null);

    useEffect(() => {
        generatePropertiesSelector();
    }, [filterParams])

    const generatePropertiesSelector = () => {
        let charProperties = characters.map(e => e[property]);
        charProperties = [...new Set(charProperties)];
        charProperties = charProperties.map(e => <option value={e}>{e}</option>);
        setValuesSelectorOptions(charProperties);
    }

    const changePropertiesSelectorHandler = () => {
        generatePropertiesSelector();
        setFilterParams(charPropertiesSelector.current.value, 'all')
    }

    const changeValueSelectorHandler = () => {
        const selectedValue = valueSelector.current.value;
        setFilterParams(property,selectedValue);
    }

    return (
        <div className={s.wrapper}>
            <select value={property} ref={charPropertiesSelector} onChange={changePropertiesSelectorHandler}>
                <option value='name'>name</option>
                <option value='height'>height</option>
                <option value='mass'>mass</option>
                <option value='hair_color'>hair color</option>
                <option value='skin_color'>skin color</option>
                <option value='eye_color'>eye color</option>
                <option value='birth_year'>birth year</option>
                <option value='gender'>gender</option>
            </select>
            <select value={value} ref={valueSelector} onChange={changeValueSelectorHandler}>
                <option value='all'>all</option>
                {valuesSelectorOptions}
            </select>
        </div>
    )
}

export default Filter;
