import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import s from './Profile.module.css'
import { UserProfileType } from '../bll/profilePageReducer'
import { AppStateType } from '../../../app/bll/redux-store'

export const UserProfile: React.FC = memo(() => {
    const userProfile = useSelector<AppStateType, UserProfileType | null>(
        (state) => state.profilePage.userProfile
    )
    if (!userProfile) return <div></div>
    else
        return (
            <div className={s.userProfile}>
                <img
                    src={userProfile.photos.large || userProfile.photos.small}
                    alt="avatar"
                />
                <div>{userProfile.fullName}</div>
                {userProfile.lookingForAJob && (
                    <div>{userProfile.lookingForAJobDescription}</div>
                )}
            </div>
        )
})
