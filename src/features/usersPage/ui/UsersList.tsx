import React, { memo, useEffect } from 'react'
import { User } from './User'
import { useAppDispatch, useAppSelector } from 'app'
import { fetchUsersTC, setFollowTC } from '../bll/thunks'
import List from '@mui/material/List'

export const UsersList: React.FC = memo(() => {
    const { usersList } = useAppSelector((state) => state.usersPage)
    const { pageSize, currentPage, friendFilter, userNameFilter } = useAppSelector(
        (state) => state.usersPage
    )
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(
            fetchUsersTC({
                page: currentPage,
                count: pageSize,
                friend: friendFilter,
                term: userNameFilter,
            })
        )
    }, [currentPage, pageSize, friendFilter, userNameFilter])

    const onFollowHandler = (userId: number, isFollow: boolean) =>
        dispatch(setFollowTC(userId, isFollow))

    if (!usersList || usersList.length === 0) return <div></div>
    return (
        <List>
            {usersList.map((u) => (
                <User key={u.id} userData={u} onFollow={onFollowHandler} />
            ))}
        </List>
    )
})
