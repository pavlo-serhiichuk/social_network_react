import './Dialogs.css'
import {addMessage, updateMessage} from "../../../Redux/dialog_producer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import React from "react";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
})

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage(e){ return dispatch(updateMessage(e)) },
        addMessage() { return dispatch(addMessage()) },
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)

//
// export default function DialogsContainer(props) {
//     const addNewMessage = () => {
//         props.store.dispatch(addMessage())
//     }
//
//     let onNewMessageChange = (e) => {
//         props.store.dispatch(updateMessage(e))
//     }
//
//     return (
//         <Dialogs updateMessage={onNewMessageChange} addMessage={addNewMessage} store={props.store}/>
//     )
// }
