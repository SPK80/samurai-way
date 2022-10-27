import React, { memo } from 'react'
import s from './Profile.module.css'
import { useAppSelector } from 'app/bll/store'

export const UserProfile: React.FC = memo(() => {
    const userProfile = useAppSelector((state) => state.profilePage.userProfile)
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
