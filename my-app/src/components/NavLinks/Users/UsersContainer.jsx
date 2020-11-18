import React from 'react';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC} from "../../../Redux/users_reducer";
import Users from "./Users";
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
   return {
       users: state.usersPage.users,
       pageSize: state.usersPage.pageSize,
       totalUsersCount: state.usersPage.totalUsersCount,
       currentPage: state.usersPage.currentPage,
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFollow(userId) { dispatch(followAC(userId))},
        onUnfollow(userId) { dispatch(unfollowAC(userId))},
        setUsers(users) { dispatch(setUsersAC(users))},
        setCurrentPage(pageNumber) { dispatch(setCurrentPageAC(pageNumber))},
        setTotalCount(totalCount) { dispatch(setTotalCountAC(totalCount))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer