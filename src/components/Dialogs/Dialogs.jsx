import React from "react";
import styleDialogs from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} key={dialog.id}></DialogItem>));
    let messagesElements = state.messages.map(message => (<Message message={message.message} id={message.id} key={message.id}></Message>));
    let newMessageBody = state.messages.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };
    return (
        <div className={styleDialogs.dialogs}>
           <div className={styleDialogs.dialogsItems}>
            {dialogsElements}
           </div>
           <div className={styleDialogs.messages}>
            <div>{messagesElements}</div>
            <div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
           </div>
        </div>
    );
}

export default Dialogs;