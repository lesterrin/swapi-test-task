import arrowFilter from "../../assets/ArrowFilter.png";
import React, {useState} from "react";
import s from './custom-selector.module.css';

const CustomSelector = ({onChange, options, activeValue}) => {

    const [isPropSelectorOpen, setIsPropSelectorOpen] = useState(false);

    const togglePropSelector = (bool) => {
        setIsPropSelectorOpen(bool);
    }

    return (
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
    )
}