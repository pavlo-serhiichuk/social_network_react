import React from 'react'
import './ProfileInfo.css'

let userBirthday = new Date(1995, 11, 17).toLocaleDateString()

const UserInfo = (props) => {
    return (
        <div>
            <div className='user-name'> John Johnson</div>
            <div className="user-info">
            <div className="info-field">City:</div>
            <div className="city">{props.city}</div>
            <div className="info-field">Birthday:</div>
            <div className="birthday">{props.birthday}</div>
            <div className="info-field">Status:</div>
            <div className="status" type="text">I'm okay</div>
            </div>
        </div>
    )
}

export default function ProfileInfo() {
    return (
        <div className="profile-info">
            <div>
                <img className="avatar"
                     src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                     alt=""/>
            </div>
            <UserInfo city="Nebraska" birthday={userBirthday} status="In a search"/>
        </div>
    )
}