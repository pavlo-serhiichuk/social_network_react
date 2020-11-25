import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, info: 'Hi! I\'m not glad to use this platform', likeCount: 0},
        {id: 2, info: 'What a beautiful day. Hello!', likeCount: 0},
    ],
    newPostText: '',
    profile: null,
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
        case SET_USER_PROFILE: {
           return {
                ...state,
               profile: action.profile
            }
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ( {type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    return profileAPI.getProfile(userId).then(data => {dispatch(setUserProfile(data))})
}

export default profileReducer