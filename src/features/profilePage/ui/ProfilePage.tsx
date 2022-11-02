import React, { memo } from 'react'
import s from './Profile.module.css'
import { UserProfile } from './UserProfile'
import { UserPosts } from './UserPosts'
import { useAppSelector } from 'app'
import { Navigate, useParams } from 'react-router-dom'
import { getValidIdNumber } from 'common/utils'

export const ProfilePage: React.FC = memo(() => {
    let { userId } = useParams()
    const authUserId = useAppSelector((state) => state.auth.userData?.id)

    const uid = getValidIdNumber(userId) ?? authUserId
    if (!uid) return <Navigate to={'/authPage'} />
    return (
        <div className={s.profile}>
            <UserProfile userId={uid} />
            <UserPosts />
        </div>
    )
})
