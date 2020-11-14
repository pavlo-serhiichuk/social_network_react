let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, info: 'Hi! I\'m not glad to use this platform', likeCount: 0},
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
    _addPost(postMessage, likeCount) {
        const newPost = {
            id: Math.random(),
            info: postMessage,
            likeCount: likeCount,
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderRoot(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._rerenderRoot(this._state)
    },
    _addMessage(message) {
        let newMessage = {
            id: Math.random(),
            message: message
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._rerenderRoot(this._state)
    },
    _updateMessage(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._rerenderRoot(this._state)
    },

    dispatch(action) {      //action - объект { type: 'ADD-POST'// }
        if(action.type === 'ADD-POST') {
            this._addPost(action.postMessage)
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(this.newText)
        } else if(action.type === 'ADD-MESSAGE') {
            this._addMessage(action.message)
        } else if(action.type === 'UPDATE-MESSAGE') {
            this._updateMessage(action.newText)
        }

    }
}

export default store

window.store = store


//store - OOP

 //икапсуляция - это скрытие отдельных деталей
//наследование - решает проблему дублирования кода
 //полиморфизм - работа с объектом с помощью общих оденаковых команд(методов), без разбора отличий

//callback - это функция которую передают и вызывают при необходимости