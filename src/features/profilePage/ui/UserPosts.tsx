import React from 'react'
import { useDispatch } from 'react-redux'
import { addPostAC } from '../bll/actions'
import { UserPostsList } from './UserPostsList'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { SendTextBox } from 'common/components/SendTextBox'

export const UserPosts: React.FC<{ canAddPost: boolean }> = ({ canAddPost }) => {
    const dispatch = useDispatch()
    const onAddPostHandler = (text: string) => dispatch(addPostAC(text))

    return (
        <Paper sx={{ p: 2, overflow: 'hidden' }} variant={'elevation'}>
            <Typography variant="h4" gutterBottom>
                My Posts
            </Typography>
            {canAddPost && <SendTextBox label="New Post" onSubmit={onAddPostHandler} />}
            <UserPostsList />
        </Paper>
    )
}
