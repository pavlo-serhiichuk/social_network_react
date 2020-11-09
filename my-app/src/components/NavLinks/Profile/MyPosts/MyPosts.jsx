import React from 'react'
import './MyPosts.css'
import Post from "./MyPost/Post";

export default function MyPosts() {
    return (
        <div>
            <div className="create-post">
                <input type="text"/>
                <input type="button" value="Share"/>
            </div>
            <div className="posts">
            <Post info="Hi! I'm glad to use this platform"/>
            <Post info="Hi! I'm glad to use this platform"/>
            <Post info="Hi! I'm glad to use this platform"/>
            </div>
        </div>
    )
}