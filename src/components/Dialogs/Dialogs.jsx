import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}
const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Valery'},
        {id: 2, name: 'Roberto'},
        {id: 3, name: 'Anna'},
        {id: 4, name: 'Bobby'},
        {id: 5, name: 'Daisy'},
        {id: 6, name: 'Victorio'}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you doing?'},
        {id: 3, message: 'Hi hi'},
        {id: 4, message: 'By By'},
        {id: 5, message: 'Looks fine'},
        {id: 6, message: 'Are you sure?'}
    ]
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}></DialogItem>);
    let messagesElements = messages.map(message => (<Message message={message.message} id={message.id}></Message>));
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
            {dialogsElements}
           </div>
           <div className={s.messages}>
            {messagesElements}
           </div>
        </div>
    );
}

export default Dialogs;