import React from 'react'
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile() {
    return (
        <div className="profile">
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}