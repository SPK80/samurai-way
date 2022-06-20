import React from "react";
import {UserProfile} from "./UserProfile";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppStateType) => ({
    userProfile: state.profilePage.userProfile
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile)
