import React, { memo } from 'react'
import s from './user.module.css'
import { NavLink } from 'react-router-dom'
import defaultAvatar from 'common/assets/avatar.png'
import { UserType } from '../bll/usersPageReducer'
import { useAppDispatch, useAppSelector } from 'app'
import { setFollowTC } from '../bll/thunks'

export const User: React.FC<{ id: number }> = memo(({ id }) => {
    const userData = useAppSelector(
        (state) =>
            state.usersPage.usersList.find((u) => u.id === id) ??
            ({} as UserType)
    )
    const dispatch = useAppDispatch()

    const onClickFollowHandler = () => {
        dispatch(setFollowTC(userData.id, !userData.followed))
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
})
