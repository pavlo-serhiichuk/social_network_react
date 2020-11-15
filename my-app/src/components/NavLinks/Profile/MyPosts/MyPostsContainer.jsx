import React from 'react'
import {addPostActionCreator, updateNewPostText} from "../../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";

export default function MyPostsContainer(props) {
    function addPost() {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (e) => {
        props.store.dispatch(updateNewPostText(e))
    }

    return (
        <MyPosts addPost={addPost}
                 updateNewPostText={onPostChange}
                 store={props.store}/>
    )


}
