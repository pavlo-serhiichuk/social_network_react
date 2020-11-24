import React from 'react'
import './ProfileInfo.css'
import Preloader from "../../../common/Preloader";
import ProfileStatus from "./Status/ProfileStatus";

let userBirthday = new Date(1995, 11, 17).toLocaleDateString()

const UserInfo = (props) => {
    return (
        <div>
            <div className='user-name'>{props.fullName}</div>
            <div className="user-info">
                <div className="info-field">Status:</div>
                <ProfileStatus status={"My current status"}/>
                <div className="info-field">Job status:</div>
                <div className="city">{props.lookingForAJobDescription}</div>
                <div className="info-field">VK:</div>
                <div className="city"><a href={"https://" + props.contacts.vk}>{props.contacts.vk}</a></div>
            </div>
        </div>
    )
}

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className="profile-info">
            <div>
                <img className="avatar"
                     src="../../../../assets/images/user.png"
                     alt=""/>
                <img className="avatar" src={props.profile.photos.large}/>
            </div>
            <UserInfo city="Nebraska"
                      contacts={props.profile.contacts}
                      fullName={props.profile.fullName}
                      lookingForAJobDescription={props.profile.lookingForAJobDescription}
                      birthday={userBirthday}
                      aboutMe={props.profile.aboutMe}/>
        </div>
    )
}

export default ProfileInfo