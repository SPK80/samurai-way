import React, {memo} from "react";
import {UserType} from "../../../bll/reducers/usersPageReducer";
import {User} from "./User";

type UsersListPropsType = {
    usersList: Array<UserType>
}

export const UsersList: React.FC<UsersListPropsType> = memo(({usersList}) => (
    <>
        {usersList.map(u =>
            <User
                key={u.id}
                id={u.id}
            />)}
    </>
))