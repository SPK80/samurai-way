import {UserType} from "../../../redux/reducers/usersPageReducer";
import React, {useEffect} from "react";
import {User} from "./User";
import avatar from "../../../avatar.png";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {followUserAC, setUsersAC, unfollowUserAC} from "../../../redux/reducers/usersPageActionCreators";

export const UsersList: React.FC = () => {
    useEffect(() => {
        if (usersListState.length === 0) dispatchSetUsers([
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
    
    const usersListState = useSelector<AppStateType, Array<UserType>>(state => state.usersPage.usersList)
    
    const dispatch = useDispatch()
    const dispatchFollow = (userId: string) => dispatch(followUserAC(userId))
    const dispatchUnfollow = (userId: string) => dispatch(unfollowUserAC(userId))
    const dispatchSetUsers = (usersList: Array<UserType>) => dispatch(setUsersAC(usersList))
    
    return (
        <div>
            {usersListState.map(u =>
                <User
                    key={u.id}
                    userData={u}
                    follow={dispatchFollow}
                    unfollow={dispatchUnfollow}
                />)}
            <button>Show more</button>
        </div>
    )
}