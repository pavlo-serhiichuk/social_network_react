import React from 'react'
import * as s from './Users.module.css'
import './User/User.css'
import UsersContainer from "./UsersContainer";
import userPhoto from '../../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i < 20; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(page => <span key={Math.random()}
                                         className={props.currentPage === page && s.selectedPage}
                                         onClick={() => {
                                             props.onPageChanged(page)
                                         }}
                    >{page}</span>
                )}
            </div>
            {props.users.map(user => {
                return (
                    <div className="user" key={user.id}>
                        <div className='follow'>
                            <NavLink to={'/profile/' + user.id}>
                                <img className="avatarInD"
                                     src={user.photos.small != null ? user.photos.small : userPhoto}
                                     alt=""/>
                            </NavLink>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "acbe659e-ab74-4691-a62b-b02b57afb23e"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(user.id)
                                                }
                                            })

                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "acbe659e-ab74-4691-a62b-b02b57afb23e"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0)  props.follow(user.id)
                                            })

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