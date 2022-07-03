import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {UsersList} from "./UsersList";
import {followUserAC, setUsersAC, unfollowUserAC} from "../../../redux/reducers/usersPageActionCreators";
import {UserType} from "../../../redux/reducers/usersPageReducer";

const mapStateToProps = (state: AppStateType) => ({
    usersList: state.usersPage.usersList,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    follow: (userId: string) => dispatch(followUserAC(userId)),
    unfollow: (userId: string) => dispatch(unfollowUserAC(userId)),
    setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users)),
})

export const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList)