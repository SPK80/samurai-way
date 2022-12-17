import React, { memo, useEffect } from 'react'
import { User } from './User'
import { useAppDispatch, useAppSelector } from 'app'
import { fetchUsersTC, setFollowTC } from '../bll/thunks'
import { useIsLoading } from 'app/bll/store'

export const UsersList: React.FC = memo(() => {
    const { usersList } = useAppSelector((state) => state.usersPage)
    const { pageSize, currentPage } = useAppSelector((state) => state.usersPage)
    const isLoading = useIsLoading()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsersTC(currentPage, pageSize))
    }, [currentPage, pageSize])

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
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                usersList.map((u) => <User key={u.id} userData={u} onFollow={onFollowHandler} />)
            )}
        </>
    )
})
