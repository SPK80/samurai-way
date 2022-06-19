import React, {ChangeEvent} from "react";
import s from './Profile.module.css';
import {UserPost} from "./UserPost";
import {PostType} from "../../../redux/stateTypes";

type UserPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    changeNewPostText: (text: string) => void
}

export const UserPosts: React.FC<UserPostsPropsType> =
    ({
         posts,
         newPostText,
         addPost,
         changeNewPostText
     }) => {
        
        const onAddPostHandler = () => {
            addPost()
        }
        
        const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            changeNewPostText(e.currentTarget.value)
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
                    {posts.map(userPost =>
                        <UserPost key={userPost.id} {...userPost}/>)}
                </div>
            </div>
        )
    }