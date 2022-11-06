import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { addPostAC, changeNewPostTextAC } from '../bll/actions'
import { UserPostsList } from './UserPostsList'
import { useAppSelector } from 'app'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const UserPosts: React.FC = () => {
    const newPostTextState = useAppSelector(
        (state) => state.profilePage.newPostText
    )

    const dispatch = useDispatch()
    const onAddPostHandler = () => dispatch(addPostAC())
    const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        dispatch(changeNewPostTextAC(e.currentTarget.value))

    return (
        <Paper sx={{ p: 2, overflow: 'hidden' }} variant={'elevation'}>
            <Typography variant="h4" gutterBottom>
                My Posts
            </Typography>
            <TextField
                multiline
                fullWidth
                id="outline
                d-basic"
                label="New Post"
                variant="outlined"
                sx={{ mb: 1 }}
                value={newPostTextState}
                onChange={changeNewPostTextHandler}
            />
            <Button
                variant={'outlined'}
                onClick={onAddPostHandler}
                disabled={newPostTextState === ''}
            >
                Add post
            </Button>
            <UserPostsList />
        </Paper>
    )
}
