import React from 'react'
import { PostType } from '../bll/profilePageReducer'
import Typography from '@mui/material/Typography'
import { LikesButton } from './LikesButton'
import { addLikeAC } from '../bll/actions'
import { useDispatch } from 'react-redux'

export const UserPost: React.FC<PostType> = ({ text, likesCount, id }) => {
    const dispatch = useDispatch()
    const onClickHandler = () => dispatch(addLikeAC(id))

    return (
        <div>
            <Typography component="pre" paragraph>
                {text}
            </Typography>
            <LikesButton count={likesCount} onClick={onClickHandler} />
        </div>
    )
}
