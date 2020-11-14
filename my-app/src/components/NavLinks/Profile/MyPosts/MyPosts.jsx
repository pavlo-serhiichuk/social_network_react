import React from 'react'
import './MyPosts.css'
import Post from "./MyPost/Post";
import {addPostActionCreator, updateNewPostText} from "../../../../Redux/profile_reducer";

export default function MyPosts(props) {
    // debugger
    const AllPosts = props.posts.map(post => <Post key={post.id} id={post.id} info={post.info}/>)

    function addNewPost() {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (e) => {
        props.dispatch(updateNewPostText(e.target.value))
    }


    return (
        <div>
            <div className="create-text">
                <input className='enter-post'
                       placeholder="Share your thoughts..."
                       onChange={onPostChange}
                       value={props.newPostText}
                />
                <button onClick={addNewPost} className='share-post fas fa-paper-plane'>
                </button>
            </div>
            <div className="posts">
                {AllPosts}
            </div>
        </div>
    )
}
