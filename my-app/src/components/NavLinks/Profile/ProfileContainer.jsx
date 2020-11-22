import React from 'react'
import './Profile.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../../Redux/profile_reducer";
import {withRouter} from "react-router-dom";
import {userAPI} from "../../../api/api";

class ProfileContainer extends React.Component {
    //ProfileContainer создается единажды как классовая
    // компонента, делая(грязную работу) запрос на сервер
        componentDidMount() {
            let userId = this.props.match.params.userId

            if(!userId) {
                userId = 2
            }

        userAPI.getProfile(userId).then(data => {this.props.setUserProfile(data)})
            //запрос происходит на DAL уровне'
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

let WithUrlDataContainerComponent =  withRouter(ProfileContainer)
// withRouter вощвращает новую компоненту,
// которая отрисует ProfileContainer,
// но в нее еще закинутся данные из url

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
//оборачиваем ProfileContainer connect - ом,
// который делает(грязную работу) запросы к стору и получая от него коллбеки.
// Connect возвращает новую компоненту, которая отрисовывает ProfileContainer но данные закинет в нее из стора