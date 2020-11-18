import React from 'react'
import * as s from './Users.module.css'
import './User/User.css'
import * as axios from "axios";
import userPhoto from '../../../assets/images/user.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage }&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber }&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for(let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(page => {
                     return    <span
                         className={this.props.currentPage === page && s.selectedPage}
                         onClick={(e) => { this.onPageChanged(page) }}
                     >{page}</span>
                    })}
                </div>
                {this.props.users.map(user => {
                    return (
                        <div className="user">
                            <div className='follow'>
                                <img className="avatarInD"
                                     src={user.photos.small != null ? user.photos.small : userPhoto}
                                     alt=""/>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => {
                                            this.props.onUnfollow(user.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            this.props.onFollow(user.id)
                                        }}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                                {/*<div>{props.location.city}</div>*/}
                                {/*<div>{props.location.country}</div>*/}
                            </div>
                        </div>
                    )
                })}</div>
        )
    }
}


export default Users

// let Users = (props) => {
//     let getUsers = () => {
//
//         if (props.users.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users")
//                 .then(response => {
//                     props.setUsers(response.data.items)
//                 })
//         }
//     }
//
//     return (
//         <div>
//             <button onClick={getUsers}>Get users</button>
//             {props.users.map(user => {
//                 return (
//                     <div className="user">
//                         <div className='follow'>
//                             <img className="avatarInD" src={user.photos.small != null ? user.photos.small : userPhoto}
//                                  alt=""/>
//                             <div>
//                                 {user.followed
//                                     ? <button onClick={() => {
//                                         props.onUnfollow(user.id)
//                                     }}>Unfollow</button>
//                                     : <button onClick={() => {
//                                         props.onFollow(user.id)
//                                     }}>Follow</button>
//                                 }
//                             </div>
//                         </div>
//                         <div>
//                             <div>{user.name}</div>
//                             <div>{user.status}</div>
//                             {/*<div>{props.location.city}</div>*/}
//                             {/*<div>{props.location.country}</div>*/}
//                         </div>
//                     </div>
//                 )
//
//             })}</div>
//
//         // <User key={user.id} id={user.id} fullName={user.fullName} location={user.location} status={user.status} photoUrl={user.photoUrl} followed={user.followed} follow={props.onFollow} unfollow={props.onUnfollow}/>
//     )
// }


// if(props.users.length === 0) {
//     props.setUsers([ {id: Math.random(), fullName: 'Alice Core', status: 'I am ready', location: { city: 'New York', country: 'USA' }, followed: true, photoUrl: 'https://art-assorty.ru/uploads/posts/2017-09/1504332996_dama-s-gornostaem.jpg' },
//         {id: Math.random(), fullName: 'John Core', status: 'I am not ready', location: { city: 'London', country: 'England' }, followed: false, photoUrl: 'https://art-assorty.ru/uploads/posts/2017-09/1504332996_dama-s-gornostaem.jpg' },
//         {id: Math.random(), fullName: 'Goa Core', status: 'I am too ready', location: { city: 'Kiev', country: 'Ukraine' }, followed: true, photoUrl: 'https://art-assorty.ru/uploads/posts/2017-09/1504332996_dama-s-gornostaem.jpg' }])
// }