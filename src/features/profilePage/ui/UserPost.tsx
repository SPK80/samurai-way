import React from 'react'
import { PostType } from '../bll/profilePageReducer'

export const UserPost: React.FC<PostType> = (props) => {
    return (
        <div>
            <div>{props.text}</div>
            <div>{props.likesCount}</div>
        </div>
    )
}
