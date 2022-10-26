import { UserType } from '../bll/usersPageReducer'
import React from 'react'
import s from './user.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import defaultAvatar from 'common/assets/avatar.png'
import { AppStateType } from 'app/bll/store'
import { followUserAC, unfollowUserAC } from '../bll/usersPageActionCreators'
import { followApi } from 'common/api/followApi'

type UserPropsType = {
    id: number
}

export const User: React.FC<UserPropsType> = ({ id }) => {
    const userData = useSelector<AppStateType, UserType>(
        (state) =>
            state.usersPage.usersList.find((u) => u.id === id) ??
            ({} as UserType)
    )
    const dispatch = useDispatch()

    const onClickFollowHandler = () => {
        if (userData.followed)
            followApi
                .unfollow(userData.id)
                .then((data) => {
                    dispatch(unfollowUserAC(userData.id))
                })
                .catch(console.log)

        if (!userData.followed)
            followApi
                .follow(userData.id)
                .then((data) => {
                    dispatch(followUserAC(userData.id))
                })
                .catch(console.log)
    }

    const avatarUrl =
        userData.photos.large ?? userData.photos.small ?? defaultAvatar
    return (
        <div className={s.user}>
            <div className={s.avatarAndFollowContainer}>
                <NavLink to={'/profile/' + id}>
                    <img src={avatarUrl} alt="avatar" />
                </NavLink>
                <button onClick={onClickFollowHandler}>
                    {userData.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
            <div className={s.userDataContainer}>
                <div className={s.nameAndStatus}>
                    <div className={s.name}>{userData.name}</div>
                    <div className={s.status}>{userData.status}</div>
                </div>
                {/*<div className={s.location}>*/}
                {/*    <div>{userData.location.country},</div>*/}
                {/*    <div>{userData.location.city}</div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
