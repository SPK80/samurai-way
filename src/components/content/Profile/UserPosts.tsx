import React, {ChangeEvent} from "react";
import s from './Profile.module.css';
import {UserPost} from "./UserPost";
import {PostType} from "../../../redux/types";

type UserPostsPropsType = {
    state: Array<PostType>
    addPost: () => void
    newPostText: string
    changeNewPost: (newPostText: string) => void
}

export const UserPosts: React.FC<UserPostsPropsType> =
    ({
         state,
         addPost,
         newPostText,
         changeNewPost
        
     }) => {
        
        const onAddPostHandler = () => {
            addPost()
        }
        
        const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            changeNewPost(e.currentTarget.value)
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