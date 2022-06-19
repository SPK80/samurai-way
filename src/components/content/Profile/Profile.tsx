import React from "react";
import s from './Profile.module.css';
import {StoreType} from "../../../redux/redux-store";
import {UserPostsContainer} from "./UserPostsContainer";
import {UserProfileContainer} from "./UserProfileContainer";

type ProfilePagePropsType = {
    store: StoreType
}

export const Profile: React.FC<ProfilePagePropsType> =
    ({store}) => {
        return (
            <div className={s.profile}>
                <img
                    src="https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-blue-technology-digital-electronics-cool-beam-background-image_340977.jpg"
                    alt="banner"/>
                <UserProfileContainer store={store}/>
                <UserPostsContainer store={store}/>
            </div>
        )
    }