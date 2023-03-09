import React from "react";
import s from './paginator.module.css';

const Paginator = ({currentPage, setCurrentPage, totalCharacters}) => {

    const totalPages = Math.ceil(totalCharacters / 10);

    return (
        <div>
            {currentPage !== 1 ? <button className={s.page_btn} onClick={() => setCurrentPage(currentPage - 1)}>
                Previous
            </button> : null}
            {currentPage < totalPages ? <button className={s.page_btn} onClick={() => setCurrentPage(currentPage + 1)}>
                Next
            </button> : null}
        </div>
    )
}

export default Paginator;