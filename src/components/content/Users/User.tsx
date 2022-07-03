import {UserType} from "../../../redux/reducers/usersPageReducer";
import React from "react";
import s from './User.module.css'

type UserPropsType = {
    userData: UserType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

export const User: React.FC<UserPropsType> =
    ({
         userData,
         follow,
         unfollow,
     }) => {
        const onButtonClickHandler = () => {
            if (userData.following) unfollow(userData.id)
            else follow(userData.id)
        }
        
        return (
            <div className={s.user}>
                <div className={s.avatarAndFollowContainer}>
                    <img src={userData.avatarUrl} alt="avatar"/>
                    <button
                        onClick={onButtonClickHandler}
                    >{userData.following ? "Unfollow" : "Follow"}</button>
                </div>
                <div className={s.userDataContainer}>
                    <div className={s.nameAndStatus}>
                        <div className={s.name}>{userData.name}</div>
                        <div className={s.status}>{userData.status}</div>
                    </div>
                    <div className={s.location}>
                        <div>{userData.location.country},</div>
                        <div>{userData.location.city}</div>
                    </div>
                </div>
            </div>
        )
    }