import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../app/bll/redux-store'
import { PostType } from '../bll/profilePageReducer'
import { UserPost } from './UserPost'

export const UserPostsList: React.FC = memo(() => {
    const postsState = useSelector<AppStateType, Array<PostType>>(
        (state) => state.profilePage.userPosts
    )
    return (
        <div>
            {postsState.map((userPost) => (
                <UserPost key={userPost.id} {...userPost} />
            ))}
        </div>
    )
})
