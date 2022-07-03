import {UserType} from "../../../redux/reducers/usersPageReducer";
import React, {useEffect} from "react";
import {User} from "./User";
import avatar from "../../../avatar.png";

export type UsersListPropsType = {
    usersList: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const UsersList: React.FC<UsersListPropsType> =
    ({
         usersList,
         follow,
         unfollow,
         setUsers
     }) => {
        
        useEffect(() => {
            if (usersList.length === 0) setUsers([
                {
                    id: '1',
                    name: 'Dmitry K.',
                    avatarUrl: avatar,
                    following: false,
                    status: 'I am looking for a Job right now..',
                    location: {
                        country: 'Belarus',
                        city: 'Minsk'
                    }
                },
                {
                    id: '2',
                    name: 'Svetlana D.',
                    avatarUrl: avatar,
                    following: false,
                    status: 'I am so pretty',
                    location: {
                        country: 'Belarus',
                        city: 'Minsk'
                    }
                },
                {
                    id: '3',
                    name: 'Sergei S.',
                    avatarUrl: avatar,
                    following: false,
                    status: 'I like football!',
                    location: {
                        country: 'Ukraine',
                        city: 'Kiev'
                    }
                },])
        }, [])
        
        return (
            <div>
                {usersList.map(u =>
                    <User
                        key={u.id}
                        userData={u}
                        follow={follow}
                        unfollow={unfollow}
                    />)}
                <button>Show more</button>
            </div>
        )
    }