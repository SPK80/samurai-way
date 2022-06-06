import React from "react"
import s from './Profile.module.css';
import {UserProfileType} from "../../../redux/state";
//
// export type UserProfilePropsType = {
// 	avatar?: string
// 	name: string
// 	age?: number
// 	birthday: string
// 	gender?: 'male' | 'female' | 'other'
// 	website?: string
// 	description: string
// 	// location: LocationType
// }
// type  LocationType = {
//   country: string
//   city: string
// }

export const UserProfile: React.FC<UserProfileType> = (props) => {
    return (
        <div className={s.userProfile}>
            <img src={props.avatar} alt="avatar"/>
            <div>{props.name}</div>
            <div>{props.gender}</div>
            <div>age - {props.age}</div>
            <div>birthday - {props.birthday}</div>
            <div>{props.description}</div>
            <a href={props.website} target="_blank" rel="noreferrer">
                {props.website}
            </a>
        </div>
    )
}