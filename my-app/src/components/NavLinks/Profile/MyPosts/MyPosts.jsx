import React from 'react'
import './MyPosts.css'
import Post from "./MyPost/Post";

export default function MyPosts(props) {
    // console.log(props)
    const AllPosts =
        props.posts.map(post => <Post key={post.id} id={post.id} info={post.info} likeCount={post.likeCount}
                                      addLike={props.addLike}/>)
    let postInfo = React.createRef()

    function addNewPost() {
        let text = postInfo.current.value
        props.addPost(text)
    }

    const onPostChange = () => {
        // debugger
        let text = postInfo.current.value
        props.updateNewPostText(text)
        // debugger
    }


    return (
        <div>
            <div className="create-post">
                <input ref={postInfo}
                       className='enter-post'
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
