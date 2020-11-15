import React from 'react'
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Dialogs from "../Dialogs/Dialogs";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default function Profile(props) {

    return (
        <div className="profile">
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}