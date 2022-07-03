import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './Profile.module.css';
import {UserPost} from "./UserPost";
import {PostType} from "../../../redux/reducers/profilePageReducer";
import {AppStateType} from "../../../redux/redux-store";
import {addPostAC, changeNewPostTextAC} from "../../../redux/reducers/profilePageActionCreators";

export const UserPosts: React.FC = () => {
    
    const postsState = useSelector<AppStateType, Array<PostType>>(state => state.profilePage.userPosts)
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
            <div>
                {postsState.map(userPost =>
                    <UserPost key={userPost.id} {...userPost}/>)}
            </div>
        </div>
    )
}