import React from "react";
import {addMessageAC, changeNewMessageTextAC} from "../../../redux/reducers/dialogsPageActionCreators";
import {NewMessage} from "./NewMessage";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType) => ({
    newMessageText: state.dialogsPage.newMessageText,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeMessage: (text: string) => dispatch(changeNewMessageTextAC(text)),
    addMessage: () => dispatch(addMessageAC()),
})

export const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)