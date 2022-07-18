import React, {ChangeEvent} from "react";
import s from './Profile.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/redux-store";
import {addPostAC, changeNewPostTextAC} from "../../../bll/reducers/profilePageActionCreators";
import {UserPostsList} from "./UserPostsList";

export const UserPosts: React.FC = () => {
    const newPostTextState = useSelector<AppStateType, string>(state => state.profilePage.newPostText)
    
    const dispatch = useDispatch()
    const onAddPostHandler = () => dispatch(addPostAC())
    const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        dispatch(changeNewPostTextAC(e.currentTarget.value))
    
    return (
        <div className={s.posts}>
            <div>My Posts</div>
            <textarea
                value={newPostTextState}
                onChange={changeNewPostTextHandler}
            />
            <div>
                <button
                    onClick={onAddPostHandler}
                >add post
                </button>
            </div>
            <UserPostsList/>
        </div>
    )
}