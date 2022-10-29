import React, { memo } from 'react'
import { UserPost } from './UserPost'
import { useAppSelector } from 'app'

export const UserPostsList: React.FC = memo(() => {
    const postsState = useAppSelector((state) => state.profilePage.userPosts)
    return (
        <div>
            {postsState.map((userPost) => (
                <UserPost key={userPost.id} {...userPost} />
            ))}
        </div>
    )
})
