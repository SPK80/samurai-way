import React from "react";
import s from './Profile.module.css';
import {UserProfile} from "./UserProfile";
import {UserPosts} from "./UserPosts";

export const ProfilePage: React.FC = () => (
    <div className={s.profile}>
        <img
            src="https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-blue-technology-digital-electronics-cool-beam-background-image_340977.jpg"
            alt="banner"
        />
        <UserProfile/>
        <UserPosts/>
    </div>
)