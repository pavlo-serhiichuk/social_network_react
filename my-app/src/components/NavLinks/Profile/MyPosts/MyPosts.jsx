import React from 'react'
import './MyPosts.css'
import Post from "./MyPost/Post";

const CreatePost = () => {
    return (
        <div className="create-post">
            <input className='enter-post' type="text" placeholder='Share your thoughts...'/>
            <button className='share-post fas fa-paper-plane'>
            </button>
        </div>
    )
}

export default function MyPosts() {
    return (
        <div>
            <CreatePost/>
            <div className="posts">
            <Post info="Hi! I'm glad to use this platform"/>
            <Post info="Hi! I'm glad to use this platform"/>
            <Post info="Hi! I'm glad to use this platform"/>
            </div>
        </div>
    )
}