import React, { memo } from 'react'
import s from './user.module.css'
import { NavLink } from 'react-router-dom'
import defaultAvatar from 'common/assets/avatar.png'
import { UserType } from '../bll/usersPageReducer'
import { useAppDispatch } from 'app'
import { setFollowTC } from '../bll/thunks'
import { RequestingStateType, RequestStatus } from 'common/bll/types'

type PropsType = {
    userData: UserType & RequestingStateType
}

export const User: React.FC<PropsType> = memo(({ userData }) => {
    const dispatch = useAppDispatch()

    const onClickFollowHandler = () => {
        dispatch(setFollowTC(userData.id, !userData.followed))
    }

    const avatarUrl = userData.photos.large ?? userData.photos.small ?? defaultAvatar
    return (
        <div className={s.user}>
            <div className={s.avatarAndFollowContainer}>
                <NavLink to={'/profile/' + userData.id}>
                    <img src={avatarUrl} alt="avatar" />
                </NavLink>
                <button onClick={onClickFollowHandler}>
                    {userData.request.status === RequestStatus.loading
                        ? 'pending...'
                        : userData.followed
                        ? 'Unfollow'
                        : 'Follow'}
                </button>
            </div>
            <div className={s.userDataContainer}>
                <div className={s.nameAndStatus}>
                    <div className={s.name}>{userData.name}</div>
                    <div className={s.status}>{userData.status}</div>
                </div>
            </div>
        </div>
    )
})
