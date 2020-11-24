import React from 'react';
import {
    follow,
    unfollow,
    setCurrentPage,
    getUsersThunkCreator
} from "../../../Redux/users_reducer";
import {connect} from 'react-redux'
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {Redirect} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render() {
// debugger
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
                   isAuth={this.props.isAuth}

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
        isAuth: state.auth.isAuth
    }
};

let withRedirect = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        getUsers: getUsersThunkCreator
    })(withRedirect)