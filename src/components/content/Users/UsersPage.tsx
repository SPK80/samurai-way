import React from 'react';
import {UsersListContainer} from "./UsersContainer";

export const UsersPage: React.FC = () => {
    return (
        <div>
            <h1>Users</h1>
            <UsersListContainer/>
        </div>
    )
}