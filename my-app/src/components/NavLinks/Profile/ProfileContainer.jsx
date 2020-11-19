import React from 'react'
import './Profile.css'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../Redux/profile_reducer";

class ProfileContainer extends React.Component{
    componentDidMount() {
        // debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // debugger
                this.props.setUserProfile(response.data)
            })
    }

    render() {
    return (
        <Profile
            {...this.props}
            profile={this.props.profile}
        />
    )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)