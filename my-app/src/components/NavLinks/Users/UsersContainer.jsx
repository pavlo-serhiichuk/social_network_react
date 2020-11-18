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
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader";


class UsersContainer extends React.Component {

    componentDidMount = () => {
        this.props.toggleIsFatching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFatching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFatching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFatching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        debugger
        return <>
            <Preloader isFatching={this.props.isFatching}/>
            <Users pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onFullow={this.props.onFullow}
                   onUnfullow={this.props.onUnfullow}
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