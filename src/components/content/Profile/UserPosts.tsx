import React, {ChangeEvent} from "react";
import s from './Profile.module.css';
import {UserPost} from "./UserPost";
import {PostType} from "../../../redux/stateTypes";
import {addPostAC, changeNewPostTextAC, ProfilePageActionTypes} from "../../../redux/profilePageActionTypes";

type UserPostsPropsType = {
    state: Array<PostType>
    newPostText: string
    dispatch: (action: ProfilePageActionTypes) => void
}

export const UserPosts: React.FC<UserPostsPropsType> =
    ({
         state,
         newPostText,
         dispatch
        
     }) => {
        
        const onAddPostHandler = () => {
            dispatch(addPostAC())
        }
        
        const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(changeNewPostTextAC(e.currentTarget.value))
        }
        
        return (
            <div className={s.posts}>
                <div>My Posts</div>
                <textarea
                    value={newPostText}
                    onChange={changeNewPostTextHandler}
                />
                <div>
                    <button
                        onClick={onAddPostHandler}
                    >add post
                    </button>
                </div>
                <div>
                    {state.map(userPost =>
                        <UserPost key={userPost.id} {...userPost}/>)}
                </div>
            </div>
        )
    }