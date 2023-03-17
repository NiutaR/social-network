import React from "react";
import s from './Search.module.css';

const Search = (props) => {
    return (
        <div className={s.search}>
            <input type="text" placeholder="Search" className={s.searchInput}/>
        </div>
    );
}

export default Search;