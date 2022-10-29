import React, { memo, useEffect } from 'react'
import s from './Profile.module.css'
import { useAppDispatch, useAppSelector } from 'app/bll/store'
import { useParams } from 'react-router-dom'
import { getValidIdNumber } from 'common/utils'
import { fetchProfileTC } from '../bll/tunks'

export const UserProfile: React.FC = memo(() => {
    const userProfile = useAppSelector((state) => state.profilePage.userProfile)
    let { userId } = useParams()
    const authUserId = useAppSelector((state) => state.auth.userData?.id)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const uid = getValidIdNumber(userId) ?? authUserId
        if (uid) dispatch(fetchProfileTC(uid))
    }, [authUserId, userId])

    if (!userProfile) return <div>Profile not found</div>

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
