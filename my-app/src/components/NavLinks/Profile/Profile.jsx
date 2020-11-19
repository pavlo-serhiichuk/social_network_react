import React from 'react'
import './Profile.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default function Profile(props) {
    return (
        <div className="profile">
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}