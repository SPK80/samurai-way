import React from "react";
import {UserType} from "../../../redux/reducers/usersPageReducer";


type UserPropsType = UserType

export const User: React.FC<UserPropsType> = (props) => {
    return (
        <div>
            <img src={props.avatar} alt="avatar"/>
            <span>{props.following ? "Unfollow" : "Follow"}</span>
            <span>{props.name}</span>
            <span>{props.status}</span>
            <span>{props.location.city}</span>
            <span>{props.location.country}</span>
        </div>
    )
}