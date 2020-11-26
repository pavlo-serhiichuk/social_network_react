import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_producer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleWare from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))
window.store = store

export default store