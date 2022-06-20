import React from "react";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType) => ({
    dialogs: state.dialogsPage.dialogs,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)