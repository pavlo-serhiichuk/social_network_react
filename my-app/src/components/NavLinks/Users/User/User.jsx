import React from 'react'
import './User.css'


let User = (props) => {
    return (
        <div className="user">
            <div className='follow'>
                <img className="avatarInD" src={props.photoUrl} alt=""/>
                <div>
                    {props.followed
                        ? <button onClick={ () => { props.follow(props.id) } }>Unfollow</button>
                        : <button onClick={ () => { props.unfollow(props.id) } }>Follow</button>
                    }
                </div>
            </div>
            <div>
                <div>{props.fullName}</div>
                <div>{props.status}</div>
                <div>{props.location.city}</div>
                <div>{props.location.country}</div>
            </div>
        </div>
    )
}

export default User