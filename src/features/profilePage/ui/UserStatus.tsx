import React from 'react'
import { useAppDispatch, useAppSelector } from 'app'
import { updateUserStatusTC } from '../bll/thunks'
import { EditableTextField } from './EditableTextField'

export const UserStatus: React.FC<{ isOwn?: boolean }> = ({ isOwn }) => {
    const { userStatus } = useAppSelector((state) => state.profilePage)
    const dispatch = useAppDispatch()
    const onSubmitHandler = (text: string) => {
        debugger
        dispatch(updateUserStatusTC(text))
    }
    if (isOwn)
        return (
            <EditableTextField onSubmit={onSubmitHandler}>
                {userStatus ?? 'No status'}
            </EditableTextField>
        )
    else return <span>{userStatus}</span>
}
