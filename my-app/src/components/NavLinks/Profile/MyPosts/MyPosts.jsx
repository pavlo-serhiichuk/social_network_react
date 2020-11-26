import React from 'react'
import './MyPosts.css'
import Post from "./MyPost/Post";

export default function MyPosts(props) {
// debugger
    const AllPosts = props.posts.map(post => <Post key={post.id} id={post.id} info={post.info}/>)

    function onAddPost() {
        // debugger
        props.addPost()
    }

    const onPostChange = (e) => {
    // debugger
        props.updateNewPostText(e.target.value)
    }
    return (
        <div>
            <div className="create-text">
                <input className='enter-post'
                       placeholder="Share your thoughts..."
                       onChange={onPostChange}
                       value={props.newPostText}
                />
                <button onClick={onAddPost} className='share-post fas fa-paper-plane'>
                </button>
            </div>
            <div className="posts">
                {AllPosts}
            </div>
        </div>
    )
}
