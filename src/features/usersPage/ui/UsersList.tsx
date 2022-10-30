import React, { memo } from 'react'
import { User } from './User'
import { useAppSelector } from 'app'

export const UsersList: React.FC = memo(() => {
    const { usersList } = useAppSelector((state) => state.usersPage)
    return (
        <>
            {usersList.map((u) => (
                <User key={u.id} userData={u} />
            ))}
        </>
    )
})
