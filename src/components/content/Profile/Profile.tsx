import React from "react";
import s from './Profile.module.css';
import {ProfilePageType} from "../../../redux/state";
import {UserProfile} from "./UserProfile";
import {UserPosts} from "./UserPosts";

type ProfilePagePropsType = {
    state: ProfilePageType
    addPost: () => void
    changeNewPost: (newPostText: string) => void
}

export const Profile: React.FC<ProfilePagePropsType> = (props) => {
    
    return (
        <div className={s.profile}>
            <img
                src="https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-blue-technology-digital-electronics-cool-beam-background-image_340977.jpg"
                alt="banner"/>
            
            <UserProfile {...props.state.userProfile}/>
            <UserPosts
                posts={props.state.userPosts}
                addPost={props.addPost}
                newPostText={props.state.newPostText}
                changeNewPost={props.changeNewPost}
            />
        </div>
    )
}