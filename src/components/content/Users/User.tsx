import {UserType} from "../../../redux/reducers/usersPageReducer";
import React from "react";
import s from './user.module.css'
import defaultAvatar from "../../../assets/avatar.png";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {followUserAC, unfollowUserAC} from "../../../redux/reducers/usersPageActionCreators";

type UserPropsType = {
    id: string
}

export const User: React.FC<UserPropsType> = ({id}) => {
    const userData = useSelector<AppStateType, UserType>(state => state.usersPage.usersList.find(u => u.id === id) ?? {} as UserType)
    const dispatch = useDispatch()
    
    const onButtonClickHandler = () => {
        if (userData.followed) dispatch(unfollowUserAC(userData.id))
        else dispatch(followUserAC(userData.id))
    }
    const avatarUrl = userData.photos.large ?? userData.photos.small ?? defaultAvatar
    return (
        <div className={s.user}>
            <div className={s.avatarAndFollowContainer}>
                <img src={avatarUrl} alt="avatar"/>
                <button
                    onClick={onButtonClickHandler}
                >{userData.followed ? "Unfollow" : "Follow"}</button>
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