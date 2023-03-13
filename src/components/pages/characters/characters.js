import React from "react";
import s from './characters.module.css';
import CharactersListContainer from "../../characters-list/characters-list-container";
import FilterContainer from "../../filter/filter-container";
import {toggleLanguage} from "../../../redux/localizationReducer";
import {connect} from "react-redux";
import Loader from "../../loader/loader";

const Characters = ({language, toggleLanguage, totalCharacters, captions, isInitialized}) => {

    const clickHandler = () => {
        toggleLanguage();
    }
    return (
        <div className={s.container}>
            <div className={s.localization} onClick={clickHandler}><span>language: {language}</span></div>
            {isInitialized ?
                <>
                    <div className={s.title}>{totalCharacters} {captions.title}</div>
                    <FilterContainer/>
                </>
                :
                <Loader/>
            }
            <CharactersListContainer/>
        </div>
    )
}

const mapStateToProps = ({localization, characters}) => ({
    language: localization.language,
    captions: localization.selectedCaptions.characters,
    totalCharacters: characters.totalCharacters,
    isInitialized: characters.isInitialized
})
export default connect(mapStateToProps, {toggleLanguage})(Characters);
