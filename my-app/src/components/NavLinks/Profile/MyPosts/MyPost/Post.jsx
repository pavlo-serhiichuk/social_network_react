import React from 'react'
import './Post.css'

class LikeButton extends React.Component {

    state = {
        likes: 0
    }

    addLikes = () => {
        let newCount = this.state.likes + 1
        this.setState({
            likes: newCount
        })
    }

    render() {
        return <div onClick={this.addLikes} className={"likes"}>Likes: {this.state.likes}</div>
    }
}

export default function Post(props) {
    return (
        <div className="post">
            <div>
                <img className="post-avatar"
                     src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"/>
            </div>
            <div>
                John Johnson
                <br/>
                <div className="post-and-likes">
                    {props.info}
                    <LikeButton />
                </div>
            </div>
        </div>
    )
}