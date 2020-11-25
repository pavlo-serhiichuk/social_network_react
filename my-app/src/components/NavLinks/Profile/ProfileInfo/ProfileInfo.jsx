import React from 'react'
import './ProfileInfo.css'
import Preloader from "../../../common/Preloader";
import ProfileStatus from "./Status/ProfileStatus";
import avatar from '../../../../assets/images/user.png'

let userBirthday = new Date(1995, 11, 17).toLocaleDateString()

const UserInfo = (props) => {
    // debugger
    return (
        <div>
            <div className='user-name'>{props.fullName}</div>
            <div className="user-info">
                <div className="info-field">Status:</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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
                <img className="avatar" src={true&&props.profile.data.photos.large || avatar}/>
            </div>
            <UserInfo city="Nebraska"
                      contacts={props.profile.data.contacts}
                      fullName={props.profile.data.fullName}
                      lookingForAJobDescription={props.profile.data.lookingForAJobDescription}
                      birthday={userBirthday}
                      aboutMe={props.profile.data.aboutMe}
                      status={props.status}
                      updateStatus={props.updateStatus}
            />
        </div>
    )
}

export default ProfileInfo