import {UserType} from "../../../redux/reducers/usersPageReducer";
import React from "react";
import {User} from "./User";

export type UsersListPropsType = {
    usersList: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

export const UsersList: React.FC<UsersListPropsType> =
    ({
         usersList,
         follow,
         unfollow,
     }) => {
        return (
            <div>
                {usersList.map(u =>
                    <User
                        key={u.id}
                        userData={u}
                        follow={follow}
                        unfollow={unfollow}
                    />)}
            </div>
        )
    }