import React from "react";
import { NavLink } from "react-router-dom";
import styleDialogs from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={styleDialogs.dialog + ' ' + styleDialogs.active}>
                <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}



export default DialogItem;