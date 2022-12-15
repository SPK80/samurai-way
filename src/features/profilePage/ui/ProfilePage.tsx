import React from 'react'
import { UserProfile } from './UserProfile'
import { UserPosts } from './UserPosts'

export const ProfilePage: React.FC = () => (
    <>
        <UserProfile />
        <UserPosts />
    </>
)
