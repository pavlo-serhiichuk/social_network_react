import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})



const withAuthRedirect = (Component) => { // HOC
    class RedirectedComponent extends React.Component { //первая ContainerComponent
        render() {
            if (!this.props.isAuth) return <Redirect to="/login"/>
            return <Component {...this.props} />
        }
    }

let connectedAuthRedirectedComponent = connect(mapStateToPropsForRedirect)(RedirectedComponent) //второя ContainerComponent
    return connectedAuthRedirectedComponent
}

export default withAuthRedirect