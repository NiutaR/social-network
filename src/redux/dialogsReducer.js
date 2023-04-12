const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [{
            id: 1,
            name: 'Valery'
        },
        {
            id: 2,
            name: 'Roberto'
        },
        {
            id: 3,
            name: 'Anna'
        },
        {
            id: 4,
            name: 'Bobby'
        },
        {
            id: 5,
            name: 'Daisy'
        },
        {
            id: 6,
            name: 'Victorio'
        }
    ],
    messages: [{
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How are you doing?'
        },
        {
            id: 3,
            message: 'Hi hi'
        },
        {
            id: 4,
            message: 'By By'
        },
        {
            id: 5,
            message: 'Looks fine'
        },
        {
            id: 6,
            message: 'Are you sure?'
        }
    ],
    newMessageBody: '' 
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            //state.newMessageBody = action.body;
            let bodyCopy = {...state};
            bodyCopy.newPostText = action.body;
            return bodyCopy;
            //return state;
        }
        case SEND_MESSAGE: {
            //let newMessageBody
            let body = state.newMessageBody;
            let bodyCopy = {...state};
            bodyCopy.messages = {...state.messages};
            bodyCopy.messages.push();
            
            return bodyCopy;
        }
        default:
            return state;
    }

};
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;