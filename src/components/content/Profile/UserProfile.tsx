import React from "react"
import s from './Profile.module.css';
import {UserProfileType} from "../../../redux/reducers/profilePageReducer";

type UserProfilePropsType = {
    userProfile: UserProfileType
}

export const UserProfile: React.FC<UserProfilePropsType> =
    ({
         userProfile: {
             age,
             avatar,
             birthday,
             description,
             gender,
             name,
             website
         }
     }) => {
        return (
            <div className={s.userProfile}>
                <img src={avatar} alt="avatar"/>
                <div>{name}</div>
                <div>{gender}</div>
                <div>age - {age}</div>
                <div>birthday - {birthday}</div>
                <div>{description}</div>
                <a href={website} target="_blank" rel="noreferrer">
                    {website}
                </a>
            </div>
        )
    }