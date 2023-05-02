const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


type PostType = {
    id: number,
    message: string,
    likesCount: number
}
let initialState = {
    posts: [{
        id: 1,
        message: 'Hi how are you?',
        likesCount: 12
    },
    {
        id: 2,
        message: 'Good,good thank you',
        likesCount: 34
    }
    ] as Array<PostType>,
    newPostText: ''
};
const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText : action.newText
            };
        }
        default:
            return state;
    }
};
type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
}
export const addPostActionCreator = (): AddPostActionCreatorActionType => ({type: ADD_POST});
export const updateNewPostActionCreator = (text: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;