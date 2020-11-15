import React from 'react'
import {addPostActionCreator, updateNewPostText} from "../../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'
import {addMessage, updateMessage} from "../../../../Redux/dialog_producer";


const mapStateToProps = (state) => ({profilePage: state.profilePage})

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText(e){ return dispatch(updateNewPostText(e)) },
        addPost() { return dispatch(addPostActionCreator()) },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
// export default function MyPostsContainer(props) {
//     function addPost() {
//         props.store.dispatch(addPostActionCreator())
//     }
//
//     const onPostChange = (e) => {
//         props.store.dispatch(updateNewPostText(e))
//     }
//
//     return (
//         <MyPosts addPost={addPost}
//                  updateNewPostText={onPostChange}
//                  store={props.store}/>
//     )
// }
