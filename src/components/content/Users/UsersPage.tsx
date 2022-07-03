import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {UsersList} from "./UsersList";
import {followUserAC, setUsersAC, unfollowUserAC} from "../../../redux/reducers/usersPageActionCreators";
import {AppStateType} from "../../../redux/redux-store";
import {UserType} from "../../../redux/reducers/usersPageReducer";

export const UsersPage: React.FC = () => {
    
    const usersListState = useSelector<AppStateType, Array<UserType>>(state => state.usersPage.usersList)
    
    const dispatch = useDispatch()
    const dispatchFollow = (userId: string) => dispatch(followUserAC(userId))
    const dispatchUnfollow = (userId: string) => dispatch(unfollowUserAC(userId))
    const dispatchSetUsers = (usersList: Array<UserType>) => dispatch(setUsersAC(usersList))
    
    return (
        <div>
            <h1>Users</h1>
            <UsersList
                usersList={usersListState}
                follow={dispatchFollow}
                unfollow={dispatchUnfollow}
                setUsers={dispatchSetUsers}
            />
        </div>
    )
}