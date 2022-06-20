import React from "react";
import {Messages} from "./Messages";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType) => ({
    messages: state.dialogsPage.messages
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)