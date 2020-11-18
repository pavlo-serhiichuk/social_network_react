import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_producer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";


// debugger
let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
})

const store = createStore(reducers)

export default store