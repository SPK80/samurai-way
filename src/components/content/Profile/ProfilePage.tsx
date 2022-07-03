import React from "react";
import s from './Profile.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {PostType, UserProfileType} from "../../../redux/reducers/profilePageReducer";
import {UserProfile} from "./UserProfile";
import {UserPosts} from "./UserPosts";
import {addPostAC, changeNewPostTextAC} from "../../../redux/reducers/profilePageActionCreators";

export const ProfilePage: React.FC = () => {
    
    const userProfileState = useSelector<AppStateType, UserProfileType>(state => state.profilePage.userProfile)
    const userPostsState = useSelector<AppStateType, Array<PostType>>(state => state.profilePage.userPosts)
    const newPostTextState = useSelector<AppStateType, string>(state => state.profilePage.newPostText)
    
    const dispatch = useDispatch()
    const dispatchChangeNewPostText = (text: string) => dispatch(changeNewPostTextAC(text))
    const dispatchAddPost = () => dispatch(addPostAC())
    
    return (
        <div className={s.profile}>
            <img
                src="https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-blue-technology-digital-electronics-cool-beam-background-image_340977.jpg"
                alt="banner"/>
            <UserProfile
                userProfile={userProfileState}
            />
            <UserPosts
                posts={userPostsState}
                newPostText={newPostTextState}
                changeNewPostText={dispatchChangeNewPostText}
                addPost={dispatchAddPost}
            />
        </div>
    )
}