import React from 'react';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFatching
} from "../../../Redux/users_reducer";
import {connect} from 'react-redux'
import Users from "./Users";
import Preloader from "../../common/Preloader";
import { userAPI } from '../../../api/api'


class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.toggleIsFatching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFatching(false)
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFatching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                // debugger
                this.props.toggleIsFatching(false)
                this.props.setUsers(data.items)
            })
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
        isFatching: state.usersPage.isFatching
    }
};

export default connect(mapStateToProps,
    {
        follow, unfollow, setUsers,
        setCurrentPage, setTotalCount,
        toggleIsFatching
    })(UsersContainer)