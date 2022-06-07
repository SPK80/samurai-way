import React from "react";
import s from './Profile.module.css';
import {ProfilePageType} from "../../../redux/stateTypes";
import {UserProfile} from "./UserProfile";
import {UserPosts} from "./UserPosts";
import {ActionTypes} from "../../../redux/actions";

type ProfilePagePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

export const Profile: React.FC<ProfilePagePropsType> =
    ({state, dispatch}) => {
        return (
            <div className={s.profile}>
                <img
                    src="https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-blue-technology-digital-electronics-cool-beam-background-image_340977.jpg"
                    alt="banner"/>
                
                <UserProfile state={state.userProfile}/>
                <UserPosts
                    state={state.userPosts}
                    newPostText={state.newPostText}
                    dispatch={dispatch}
                />
            </div>
        )
    }