import React from 'react'
import './Profile.css'
import Profile from "./Profile";

class ProfileContainer extends React.Component{
    render() {
    return (
        <Profile
            {...this.props}
        />
    )
    }
}

export default ProfileContainer