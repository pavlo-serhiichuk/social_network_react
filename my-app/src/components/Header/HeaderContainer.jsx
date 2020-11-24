import React from 'react'
import './Header.css'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/auth_reducer";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
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

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)

// export default compose(connect(mapStateToProps, {getAuthUserData}),withAuthRedirect)(HeaderContainer)