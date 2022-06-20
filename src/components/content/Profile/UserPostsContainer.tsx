import React from "react";
import {addPostAC, changeNewPostTextAC} from "../../../redux/reducers/profilePageActionCreators";
import {UserPosts} from "./UserPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

const mapStateToProps = (state: AppStateType) => ({
    posts: state.profilePage.userPosts,
    newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addPost: () => dispatch(addPostAC()),
    changeNewPostText: (text: string) => dispatch(changeNewPostTextAC(text)),
})

export const UserPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserPosts)