import React, {memo} from "react"
import {useSelector} from "react-redux";
import s from './Profile.module.css';
import {UserProfileType} from "../../../redux/reducers/profilePageReducer";
import {AppStateType} from "../../../redux/redux-store";

export const UserProfile: React.FC = memo(() => {
    const {
        age,
        avatar,
        birthday,
        description,
        gender,
        name,
        website
    } = useSelector<AppStateType, UserProfileType>(state => state.profilePage.userProfile)
    
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
})