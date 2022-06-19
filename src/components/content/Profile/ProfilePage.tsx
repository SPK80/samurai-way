import React from "react";
import s from './Profile.module.css';
import {UserPostsContainer} from "./UserPostsContainer";
import {UserProfileContainer} from "./UserProfileContainer";

export const ProfilePage: React.FC = () => {
    return (
        <div className={s.profile}>
            <img
                src="https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-blue-technology-digital-electronics-cool-beam-background-image_340977.jpg"
                alt="banner"/>
            <UserProfileContainer/>
            <UserPostsContainer/>
        </div>
    )
}