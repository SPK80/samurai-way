import React, { memo } from 'react'
import { User } from './User'
import { useAppDispatch, useAppSelector } from 'app'
import { setFollowTC } from '../bll/thunks'

export const UsersList: React.FC = memo(() => {
    const { usersList } = useAppSelector((state) => state.usersPage)
    const dispatch = useAppDispatch()

    const onFollowHandler = (userId: number, isFollow: boolean) =>
        dispatch(setFollowTC(userId, isFollow))

    if (
        !usersList ||
        !Array.isArray(usersList) ||
        (Array.isArray(usersList) && usersList.length === 0)
    )
        return <div></div>
    return (
        <>
            {usersList.map((u) => (
                <User key={u.id} userData={u} onFollow={onFollowHandler} />
            ))}
        </>
    )
})
