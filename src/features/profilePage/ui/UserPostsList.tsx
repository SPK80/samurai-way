import React, { memo } from 'react'
import { UserPost } from './UserPost'
import { useAppSelector } from 'app'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

export const UserPostsList: React.FC = memo(() => {
    const postsState = useAppSelector((state) => state.profilePage.userPosts)
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
            {postsState.map((userPost) => (
                <ListItem key={userPost.id} divider alignItems="flex-start">
                    <UserPost {...userPost} />
                </ListItem>
            ))}
        </List>
    )
})
