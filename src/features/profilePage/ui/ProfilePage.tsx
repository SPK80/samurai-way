import React from 'react'
import { UserProfile } from './UserProfile'
import { UserPosts } from './UserPosts'
import { RedirectIfNotLoggedIn } from 'common/components/RedirectIfNotLoggedIn'

export const ProfilePage: React.FC = () => (
    <>
        <RedirectIfNotLoggedIn to="/authPage" />
        <UserProfile />
        <UserPosts />
    </>
)
