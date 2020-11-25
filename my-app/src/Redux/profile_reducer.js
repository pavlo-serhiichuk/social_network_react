import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, info: 'Hi! I\'m not glad to use this platform', likeCount: 0},
        {id: 2, info: 'What a beautiful day. Hello!', likeCount: 0},
    ],
    newPostText: '',
    profile: null,
    status: ''
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
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}

export const getUserStatus = (userId) => (dispatch) => {
    // debugger
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
}

export const updateUserStatus = (status) => (dispatch) => {
    debugger
    profileAPI.updateStatus(status)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            }
        )
}

export default profileReducer