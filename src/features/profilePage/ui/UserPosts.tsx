import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { addPostAC, changeNewPostTextAC } from '../bll/actions'
import { UserPostsList } from './UserPostsList'
import { useAppSelector } from 'app'
import Paper from '@mui/material/Paper'

export const UserPosts: React.FC = () => {
    const newPostTextState = useAppSelector(
        (state) => state.profilePage.newPostText
    )

    const dispatch = useDispatch()
    const onAddPostHandler = () => dispatch(addPostAC())
    const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        dispatch(changeNewPostTextAC(e.currentTarget.value))

    return (
        <Paper sx={{ p: 1, overflow: 'hidden' }} variant={'elevation'}>
            <div>My Posts</div>
            <textarea
                value={newPostTextState}
                onChange={changeNewPostTextHandler}
            />
            <div>
                <button onClick={onAddPostHandler}>add post</button>
            </div>
            <UserPostsList />
        </Paper>
    )
}
