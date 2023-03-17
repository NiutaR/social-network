import React from "react";
import s from './Buttons.module.css';


const Buttons = () => {
    return (
       
        <div className={s.buttons}>
            <div className={s.buttonsContainer}>
                <button className={s.logIn}>Log In</button>
                <button className={s.signUp}>Sign Up</button>
            </div>
        </div>
        
    );
}

export default Buttons;