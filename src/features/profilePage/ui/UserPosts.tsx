import React from 'react'
import { useDispatch } from 'react-redux'
import { addPostAC, changeNewPostTextAC } from '../bll/actions'
import { UserPostsList } from './UserPostsList'
import { useAppSelector } from 'app'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { SendTextBox } from '../../../common/components/SendTextBox'

export const UserPosts: React.FC = () => {
    const newPostTextState = useAppSelector((state) => state.profilePage.newPostText)
    const dispatch = useDispatch()
    const onAddPostHandler = () => dispatch(addPostAC())
    const onChangeTextHandler = (text: string) => dispatch(changeNewPostTextAC(text))

    return (
        <Paper sx={{ p: 2, overflow: 'hidden' }} variant={'elevation'}>
            <Typography variant="h4" gutterBottom>
                My Posts
            </Typography>
            <SendTextBox
                text={newPostTextState}
                label="New Post"
                onChangeText={onChangeTextHandler}
                onSubmit={onAddPostHandler}
            />
            <UserPostsList />
        </Paper>
    )
}
