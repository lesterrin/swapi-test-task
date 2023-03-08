import React from "react";
import s from './filter.module.css';

const Filter = () => {
    return (
        <div>
            <select>
                <option>Eye color</option>
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

export default Filter;
