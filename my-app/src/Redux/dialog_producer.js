const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

 const dialogReducer = (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText
            state.messages.push({id: Math.random(), message: body})
            state.newMessageText = ''
            return state
        case UPDATE_MESSAGE:
            state.newMessageText = action.newText
            return state
        default:
            return state
}}

export const addMessage = (text) =>({type: ADD_MESSAGE, message: text})
export const updateMessage = (text) => ({type: UPDATE_MESSAGE, newText: text})

 export default dialogReducer