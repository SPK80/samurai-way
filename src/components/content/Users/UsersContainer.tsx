import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {UsersList, UsersListPropsType} from "./UsersList";
import {followUserAC, unfollowUserAC} from "../../../redux/reducers/usersPageActionCreators";

const mapStateToProps = (state: AppStateType) => ({
    usersList: state.usersPage.usersList,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    follow: (userId: string) => dispatch(followUserAC(userId)),
    unfollow: (userId: string) => dispatch(unfollowUserAC(userId)),
})

export const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList)