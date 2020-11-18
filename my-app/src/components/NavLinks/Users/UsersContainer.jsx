import React from 'react';
import {followAC, unfollowAC, setUsers} from "../../../Redux/users_reducer";
import Users from "./Users";
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
   return {
       users: state.usersPage.users
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFollow(userId) { return dispatch(followAC(userId))},
        onUnfollow(userId) { return dispatch(unfollowAC(userId))},
        setUsers(users) { return dispatch(setUsers(users))},
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer