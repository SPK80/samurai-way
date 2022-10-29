import React, { ChangeEvent } from 'react'
import s from './Profile.module.css'
import { useDispatch } from 'react-redux'
import { addPostAC, changeNewPostTextAC } from '../bll/actions'
import { UserPostsList } from './UserPostsList'
import { useAppSelector } from 'app'

export const UserPosts: React.FC = () => {
    const newPostTextState = useAppSelector(
        (state) => state.profilePage.newPostText
    )

    const dispatch = useDispatch()
    const onAddPostHandler = () => dispatch(addPostAC())
    const changeNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        dispatch(changeNewPostTextAC(e.currentTarget.value))

    return (
        <div className={s.posts}>
            <div>My Posts</div>
            <textarea
                value={newPostTextState}
                onChange={changeNewPostTextHandler}
            />
            <div>
                <button onClick={onAddPostHandler}>add post</button>
            </div>
            <UserPostsList />
        </div>
    )
}
