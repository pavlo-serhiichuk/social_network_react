const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, info: 'Hi! I\'m not glad to use this platform', likeCount: 0},
        {id: 2, info: 'What a beautiful day. Hello!', likeCount: 0},
    ],
    newPostText: 'sdf',
}

const profileReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: Math.random(),
                info: state.newPostText,
                likeCount: 0,
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
           return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ( {type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer