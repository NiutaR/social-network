const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
    id: number,
    name: string
}
type MessageType = {
    id: number,
    message: string
}
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
    ] as Array<DialogType>,
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
    ] as Array<MessageType>,
    newMessageBody: ''
};

export type InitialStateType = typeof initialState
const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {
                    id : state.messages.length + 1,
                    message: body
                }]
            };

        default:
            return state;
    }

};
type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({
    type: SEND_MESSAGE, newMessageBody
});
export const updateNewMessageBodyCreator = (body: string) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    });

export default dialogsReducer;