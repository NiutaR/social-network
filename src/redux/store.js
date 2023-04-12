import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [{
                    id: 1,
                    message: 'Hi how are you?',
                    likesCount: '12'
                },
                {
                    id: 2,
                    message: 'Good,good thank you',
                    likesCount: '34'
                }
            ],
            newPostText: 'it-kamasutra'

        },
        dialogsPage: {
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
        }, 
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state);
        
    }

};



export default store;