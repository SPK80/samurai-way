import React from "react";
import {PostType} from "../../../bll/reducers/profilePageReducer";

export const UserPost: React.FC<PostType> = (props) => {
    return (
        <div>
            <div>{props.text}</div>
            <div>{props.likesCount}</div>
        </div>
    )
}