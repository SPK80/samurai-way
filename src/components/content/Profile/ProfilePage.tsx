import React, {useEffect, useState} from "react";
import s from './Profile.module.css';
import {UserProfile} from "./UserProfile";
import {UserPosts} from "./UserPosts";
import {usersApi, ProfileType} from "../Users/usersApi";

export const ProfilePage: React.FC = () => (
    <div className={s.profile}>
        <img
            src="https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-blue-technology-digital-electronics-cool-beam-background-image_340977.jpg"
            alt="banner"
        />
        <DimichProfile/>
        <UserPosts/>
    </div>
)

const DimichProfile: React.FC = () => {
    const [userProfile, setUserProfile] = useState<ProfileType>()
    
    useEffect(() => {
        usersApi.getProfile(2).then(res => {
            setUserProfile(res as ProfileType)
        })
    }, [])
    return (<>
            <div>{userProfile?.userId}</div>
            {/*<div>{userProfile?.contacts}</div>*/}
            <div>{userProfile?.fullName}</div>
            {/*<div>{userProfile?.photos}</div>*/}
            <div>{userProfile?.lookingForAJob}</div>
            <div>{userProfile?.lookingForAJobDescription}</div>
        
        </>
    
    )
}