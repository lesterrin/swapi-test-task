import React from "react";
import s from './paginator.module.css';

const Paginator = ({currentPage, setCurrentPage, totalCharacters, captions}) => {

    const totalPages = Math.ceil(totalCharacters / 10);

    return (
        <div>
            {currentPage !== 1 ? <button className={s.page_btn} onClick={() => setCurrentPage(currentPage - 1)}>
                {captions.previous}
            </button> : null}
            {currentPage < totalPages ? <button className={s.page_btn} onClick={() => setCurrentPage(currentPage + 1)}>
                {captions.next}
            </button> : null}
        </div>
    )
}

export default Paginator;
