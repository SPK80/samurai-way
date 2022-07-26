import React, {memo, useEffect} from "react";
import s from './Profile.module.css';
import {UserProfile} from "./UserProfile";
import {UserPosts} from "./UserPosts";
import {profileApi} from "../../../api/profileApi";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfileAC} from "../../../bll/reducers/profilePageActionCreators";
import {useParams} from "react-router-dom";
import {AppStateType} from "../../../bll/redux-store";

export const ProfilePage: React.FC = memo(() => {
    let {userId} = useParams()
    // console.log('userId', userId)
    
    const authUserId = useSelector<AppStateType, number | null>(state => state.auth.userId)
    // console.log('authUserId', authUserId)
    
    const dispatch = useDispatch()
    useEffect(() => {
        if (!userId && !authUserId) return
        const uid = Number(userId ?? authUserId)
        // console.log('uid', uid)
        profileApi.getProfile(uid).then((res) =>
            dispatch(setUserProfileAC(res)))
    }, [authUserId])
    
    return (
        <div className={s.profile}>
            <img
                src="https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-blue-technology-digital-electronics-cool-beam-background-image_340977.jpg"
                alt="banner"
            />
            <UserProfile/>
            <UserPosts/>
        </div>)
})