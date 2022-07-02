import React from "react";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {UsersList, UsersListPropsType} from "./UsersList";

const mapStateToProps = (state: AppStateType): UsersListPropsType => {
    return ({
        usersList: state.usersPage.usersList
    })
}

// const mapDispatchToProps = (dispatch: Dispatch) => ({})
export const UsersListContainer = connect(mapStateToProps)(UsersList)