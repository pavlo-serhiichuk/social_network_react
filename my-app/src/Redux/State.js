import rerenderRoot from "../render";

let state = {
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
        ]
    },
    sidebar: {
        myProfile: 'My profile',
        dialogs: 'Dialogs',
        music: 'Music',
        news: 'News',
        settings: 'Settings',
    }
};
window.state = state

export const addPost = ((postMessage, likeCount) => {
    const newPost = {
        id: Math.random(),
        info: postMessage,
        likeCount: likeCount,
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderRoot(state)
})
export function updateNewPostText(newText) {
    state.profilePage.newPostText = newText
    rerenderRoot(state)
}


export default state