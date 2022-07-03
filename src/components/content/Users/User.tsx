import {UserType} from "../../../redux/reducers/usersPageReducer";
import React from "react";
import s from './User.module.css'

type UserPropsType = UserType

export const User: React.FC<UserPropsType> = (props) => {
    return (
        <div className={s.user}>
            <div className={s.avatarAndFollowContainer}>
                <img src={props.avatar} alt="avatar"/>
                <button>{props.following ? "Unfollow" : "Follow"}</button>
            </div>
            <div className={s.userDataContainer}>
                <div className={s.nameAndStatus}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.status}>{props.status}</div>
                </div>
                <div className={s.location}>
                    <div>{props.location.country},</div>
                    <div>{props.location.city}</div>
                </div>
            </div>
        </div>
    )
}