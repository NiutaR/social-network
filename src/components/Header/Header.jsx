import React from "react";
import s from './Header.module.css';
import Search from "./Search/Search";
import Buttons from "./Buttons/Buttons";


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.logo}>
                </div>
                <Search></Search>
                <Buttons>
                
                </Buttons>
            </div>
            
        </header>
    );
}

export default Header;