import React, {useState, useEffect} from "react";
import arrowFilter from '../../assets/ArrowFilter.png';
import s from './filter.module.css';

const Filter = ({characters, setFilterParams, filterParams}) => {

    const {property, value} = filterParams;

    const [valuesSelectorOptions, setValuesSelectorOptions] = useState(null);

    useEffect(() => {
        generateValuesSelector();
    }, [filterParams])

    const generateValuesSelector = () => {
        let propertyValues = characters.map(e => e[property]);
        propertyValues = [...new Set(propertyValues)];
        propertyValues = propertyValues.map(e => <li customValue={e} onClick={changeValueSelectorHandler}>{e}</li>);
        setValuesSelectorOptions(propertyValues);
    }

    const [isPropSelectorOpen, setIsPropSelectorOpen] = useState(false);
    const [isValueSelectorOpen, setIsValueSelectorOpen] = useState(false);

    const togglePropSelector = (bool) => {
        setIsPropSelectorOpen(bool);
    }

    const toggleValueSelector = (bool) => {
        setIsValueSelectorOpen(bool);
    }

    const changePropertiesSelectorHandler = (e) => {
        togglePropSelector(false);
        setFilterParams(e.target.getAttribute('customValue'), 'all')
        generateValuesSelector();
    }

    const changeValueSelectorHandler = (e) => {
        toggleValueSelector(false);
        const selectedValue = e.target.getAttribute('customValue');
        setFilterParams(property, selectedValue);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.custom_selector} onBlur={() => togglePropSelector(false)} tabIndex="0">
                <div onClick={() => togglePropSelector(!isPropSelectorOpen)}
                     className={s.custom_selector_trigger}>
                    {property.replace('_', ' ')}
                    <img src={arrowFilter}/>
                </div>
                {isPropSelectorOpen &&
                <ol className={s.custom_selector_options}>
                    <li customValue='name' onClick={changePropertiesSelectorHandler}>name</li>
                    <li customValue='height' onClick={changePropertiesSelectorHandler}>height</li>
                    <li customValue='mass' onClick={changePropertiesSelectorHandler}>mass</li>
                    <li customValue='hair_color' onClick={changePropertiesSelectorHandler}>hair color</li>
                    <li customValue='skin_color' onClick={changePropertiesSelectorHandler}>skin color</li>
                    <li customValue='eye_color' onClick={changePropertiesSelectorHandler}>eye color</li>
                    <li customValue='birth_year' onClick={changePropertiesSelectorHandler}>birth year</li>
                    <li customValue='gender' onClick={changePropertiesSelectorHandler}>gender</li>
                </ol>
                }
            </div>

            <div className={s.custom_selector} onBlur={() => toggleValueSelector(false)} tabIndex="0">
                <div onClick={() => toggleValueSelector(true)}
                     className={s.custom_selector_trigger}>
                    {value.replace('_', ' ')}
                    <img src={arrowFilter}/>
                </div>
                {isValueSelectorOpen &&
                <ol className={s.custom_selector_options}>
                    {valuesSelectorOptions}
                </ol>
                }
            </div>
        </div>
    )
}

export default Filter;
