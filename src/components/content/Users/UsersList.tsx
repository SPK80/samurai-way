import {UserType} from "../../../redux/reducers/usersPageReducer";
import React from "react";
import {User} from "./User";

export type UsersListPropsType = {
    usersList: Array<UserType>
}
export const UsersList: React.FC<UsersListPropsType> = ({usersList}) => {
    return (
        <div>
            {usersList.map(u => <User key={u.id} {...u}/>)}
        </div>
    )
}