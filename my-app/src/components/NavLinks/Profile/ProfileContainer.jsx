import React from 'react'
import './Profile.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../Redux/profile_reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    //ProfileContainer создается единажды как классовая
    // компонента, делая(грязную работу) запрос на сервер
        componentDidMount() {
            let userId = this.props.match.params.userId
            if(!userId) userId = 2
            this.props.getUserProfile(userId)
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

 // let authRedirectComponent = (props) => {
 //     if(!this.props.isAuth) return <Redirect to="/login"/>
 //
 //     return <ProfileContainer {...props} />
 // }

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent =  withRouter(ProfileContainer)
// withRouter вощвращает новую компоненту,
// которая отрисует ProfileContainer,
// но в нее еще закинутся данные из url

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
//оборачиваем ProfileContainer connect - ом,
// который делает(грязную работу) запросы к стору и получая от него коллбеки.
// Connect возвращает новую компоненту, которая отрисовывает ProfileContainer но данные закинет в нее из стора