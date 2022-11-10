import React, { memo } from 'react'
import { UserProfile } from './UserProfile'
import { UserPosts } from './UserPosts'
import { useParams } from 'react-router-dom'
import { getValidIdNumber } from 'common/bll/utils'
import { RedirectIfNotLoggedIn } from 'common/components/RedirectIfNotLoggedIn'

export const ProfilePage: React.FC = memo(() => {
    const { userId } = useParams()
    return (
        <>
            <RedirectIfNotLoggedIn to="/authPage" />
            <UserProfile userId={getValidIdNumber(userId)} />
            <UserPosts canAddPost={!userId} />
        </>
    )
})
