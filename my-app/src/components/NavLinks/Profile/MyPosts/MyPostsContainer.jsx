import React from 'react'
import {addPostActionCreator, updateNewPostText} from "../../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    // debugger
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText(e){ return dispatch(updateNewPostText(e)) },
        addPost() { return dispatch(addPostActionCreator()) },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer

