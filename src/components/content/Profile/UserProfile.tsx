import React from "react"
import s from './Profile.module.css';
import {UserProfileType} from "../../../redux/stateTypes";

type UserProfilePropsType = {
    state: UserProfileType
}

export const UserProfile: React.FC<UserProfilePropsType> = ({state}) => {
    return (
        <div className={s.userProfile}>
            <img src={state.avatar} alt="avatar"/>
            <div>{state.name}</div>
            <div>{state.gender}</div>
            <div>age - {state.age}</div>
            <div>birthday - {state.birthday}</div>
            <div>{state.description}</div>
            <a href={state.website} target="_blank" rel="noreferrer">
                {state.website}
            </a>
        </div>
    )
}