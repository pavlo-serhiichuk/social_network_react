import React from 'react';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFatching, toggleFollowing,
    getUsersThunkCreator
} from "../../../Redux/users_reducer";
import {connect} from 'react-redux'
import Users from "./Users";
import Preloader from "../../common/Preloader";
import { userAPI } from '../../../api/api'


class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFatching ? <Preloader/> : null}

            <Users pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   followingInProcess={this.props.followingInProcess}
                   toggleFollowing={this.props.toggleFollowing}

            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFatching: state.usersPage.isFatching,
        followingInProcess: state.usersPage.followingInProcess,
    }
};

export default connect(mapStateToProps,
    {
        follow, unfollow,
        setCurrentPage,
         toggleFollowing,
        getUsers: getUsersThunkCreator,

    })(UsersContainer)