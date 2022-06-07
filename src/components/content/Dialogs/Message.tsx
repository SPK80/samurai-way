import s from "./Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../redux/types";

type MessagePropsType = MessageType

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}