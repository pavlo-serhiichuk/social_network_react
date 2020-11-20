import React from 'react'
import './Header.css'
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth_reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
                    debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;

                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        debugger
        return (
        <Header {...this.props} />
    )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {setAuthUserData: setUserData})(HeaderContainer)
