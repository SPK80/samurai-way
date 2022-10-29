import React from 'react'
import s from './Profile.module.css'
import { PostType } from '../bll/profilePageReducer'

export const UserPost: React.FC<PostType> = (props) => {
    return (
        <div className={s.post}>
            <pre>{props.text}</pre>
            <div>likes: {props.likesCount}</div>
        </div>
    )
}
