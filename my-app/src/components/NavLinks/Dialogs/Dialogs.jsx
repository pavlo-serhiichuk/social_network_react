import React from 'react'
import './Dialogs.css'
import Message from './Message/Message'
import UserDialog from './UserDialog/UserDialog'

export default function Dialogs(props) {

    let AllDialogs = props.state.dialogs.map(d => <UserDialog key={d.id} id={d.id} name={d.name} />)
    let AllMessages = props.state.messages.map(m => <Message key={m.id} message={m.message}/>)

    let postInfo = React.createRef()

    const addPost = () => {
        let text = postInfo.current.value
        alert(text)
    }

    return (
        <div className="dialogs">
            <div className="users-dialogs">
                {AllDialogs}
            </div>
            <div className="messages">
                <div>
                    <div className="create-post">
                        <img className="post-avatar"
                             src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"/>
                        <input ref={postInfo} className='enter-post' type="text" placeholder='Share your thoughts...'/>
                        <button onClick={addPost} className='share-post fas fa-paper-plane'>
                        </button>
                    </div>
                </div>
                {AllMessages}
            </div>
        </div>
    )
}