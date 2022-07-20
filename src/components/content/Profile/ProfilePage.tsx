import React, {useEffect} from "react";
import s from './Profile.module.css';
import {UserProfile} from "./UserProfile";
import {UserPosts} from "./UserPosts";
import {profileApi} from "../../../dal/profileApi";
import {useDispatch} from "react-redux";
import {setUserProfileAC} from "../../../bll/reducers/profilePageActionCreators";
import {useParams} from "react-router-dom";

export const ProfilePage: React.FC = () => {
    const {userId} = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        profileApi.getProfile(Number(userId)).then((res) => {
            dispatch(setUserProfileAC(res))
        })
    }, [])
    
    return (
        <div className={s.profile}>
            <img
                src="https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-blue-technology-digital-electronics-cool-beam-background-image_340977.jpg"
                alt="banner"
            />
            <UserProfile/>
            <UserPosts/>
        </div>)
}