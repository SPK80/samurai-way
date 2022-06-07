import React from "react";
import s from './Profile.module.css';
import {ProfilePageType} from "../../../redux/types";
import {UserProfile} from "./UserProfile";
import {UserPosts} from "./UserPosts";

type ProfilePagePropsType = {
    state: ProfilePageType
    addPost: () => void
    changeNewPost: (newPostText: string) => void
}

export const Profile: React.FC<ProfilePagePropsType> =
    ({state, addPost, changeNewPost}) => {
        return (
            <div className={s.profile}>
                <img
                    src="https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-blue-technology-digital-electronics-cool-beam-background-image_340977.jpg"
                    alt="banner"/>
                
                <UserProfile state={state.userProfile}/>
                <UserPosts
                    state={state.userPosts}
                    newPostText={state.newPostText}
                    addPost={addPost}
                    changeNewPost={changeNewPost}
                />
            </div>
        )
    }