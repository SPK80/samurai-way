import React, {ChangeEvent} from "react";
import s from './Profile.module.css';
import {UserPost} from "./UserPost";
import {PostType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    changeNewPost: (newPostText: string) => void
}

export const UserPosts: React.FC<PropsType> = (props) => {
    
    const onAddPostHandler = () => {
        props.addPost()
    }
    
    const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPost(e.currentTarget.value)
    }
    
    return (
        <div className={s.posts}>
            <div>My Posts</div>
            <textarea
                value={props.newPostText}
                onChange={changeNewPostTextHandler}
            />
            <div>
                <button
                    onClick={onAddPostHandler}
                >add post
                </button>
            </div>
            <div>
                {props.posts.map(userPost =>
                    <UserPost key={userPost.id} {...userPost}/>)}
            </div>
        </div>
    )
}