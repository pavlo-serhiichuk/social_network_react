import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_producer";
import sidebarReducer from "./sidebar_reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, info: 'Hi! I\'m not glad to use this platform', likeCount: 0},
                {id: 2, info: 'What a beautiful day. Hello!', likeCount: 0},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {name: "Alex", id: 1},
                {name: "Oleg", id: 2},
                {name: "Lo", id: 3},
                {name: "Lena", id: 4},
                {name: "Po", id: 5},
            ],
            messages: [
                {id: 1, message: 'Hi, there!'},
                {id: 2, message: 'Hello, everyone!'},
                {id: 3, message: 'Hi, guys!'},
            ],
            newMessageText: 'default',
        },
        sidebar: {
            myProfile: 'My profile',
            dialogs: 'Dialogs',
            music: 'Music',
            news: 'News',
            settings: 'Settings',
        }
    },
    _rerenderRoot() {},
    getState() {
        return this._state
    },
    subscribe(observer){
        this._rerenderRoot = observer // паттерн observer или addEventListener
    },
    dispatch(action) { //action - объект { type: 'ADD-POST'// }
        this._state.profilePage = profileReducer(this._state.profilePage, action)


        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._rerenderRoot(this._state)
    }}





export default store

window.store = store

// _addPost() {
    //     const newPost = {
    //         id: Math.random(),
    //         info: this._state.profilePage.newPostText,
    //         likeCount: 0,
    //     };
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._rerenderRoot(this._state)
    // },
    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._rerenderRoot(this._state)
    // },
    // _addMessage() {
    //     let newMessage = {
    //         id: Math.random(),
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.newMessageText = ''
    //     this._rerenderRoot(this._state)
    // },
    // _updateMessage(newText) {
    //     this._state.dialogsPage.newMessageText = newText
    //     this._rerenderRoot(this._state)
    // },



        // if(action.type === 'ADD-POST') {
        //     this._addPost()
        // } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._updateNewPostText(action.newTextOfPost)
        // } else if(action.type === 'ADD-MESSAGE') {
        //     this._addMessage(action.message)
        // } else if(action.type === 'UPDATE-MESSAGE') {
        //     this._updateMessage(action.newText)
        // }




//store - OOP

 //икапсуляция - это скрытие отдельных деталей
//наследование - решает проблему дублирования кода
 //полиморфизм - работа с объектом с помощью общих оденаковых команд(методов), без разбора отличий

//callback - это функция которую передают и вызывают при необходимости

//S. Принцип единственной ответственности(Single responsibility)
// O. Принцип открытости/закрытости (Open-closed)
// L. Принцип подстановки Барбары Лисков (Liskov substitution)
// I. Принцип разделения интерфейса (Interface segregation)
// D. Принцип инверсии зависимостей (Dependency Invertion)