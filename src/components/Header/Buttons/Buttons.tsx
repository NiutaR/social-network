import React from "react";
import s from './Buttons.module.css';
import { NavLink } from "react-router-dom";

const Buttons = () => {
    return (

        <div className={s.buttons}>
            <div className={s.buttonsContainer}>
                <NavLink to='/login' color="primary"  className={s.logIn}>LogIn</NavLink>
                <NavLink to='/signup' className={s.signUp} color="primary">SignUp</NavLink>
            </div>
        </div>

    );
}

export default Buttons;