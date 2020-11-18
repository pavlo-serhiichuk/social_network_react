import React from 'react'
import * as s from './Users.module.css'
import './User/User.css'
import UsersContainer from "./UsersContainer";
import userPhoto from '../../../assets/images/user.png'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for(let i = 1; i < 20; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(page => {
                    return    <span
                        className={props.currentPage === page && s.selectedPage}
                        onClick={() => { props.onPageChanged(page) }}
                    >{page}</span>
                })}
            </div>
            {props.users.map(user => {
                return (
                    <div className="user">
                        <div className='follow'>
                            <img className="avatarInD"
                                 src={user.photos.small != null ? user.photos.small : userPhoto}
                                 alt=""/>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        props.unfollow(user.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                    </div>
                )
            })}</div>
    )
}

export default Users