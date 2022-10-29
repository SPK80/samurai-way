import React, { memo } from 'react'
import { Users } from './Users'

export const UsersPage: React.FC = memo(() => {
    return (
        <div>
            <h1>Users</h1>
            <Users />
        </div>
    )
})
