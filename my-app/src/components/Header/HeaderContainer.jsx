import React from 'react'
import './Header.css'
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/auth_reducer";
import {userAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
            userAPI.getAuth().then(response => {
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;

                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
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
