import React from 'react'
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";

export default function Profile() {
    return (
        <div className="profile">
            <div className="avatar">
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}