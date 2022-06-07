import React from "react";
import {PostType} from "../../../redux/types";

export const UserPost: React.FC<PostType> = (props) => {
    return (
        <div>
            <div>{props.message}</div>
            <div>{props.likesCount}</div>
        </div>
    )
}