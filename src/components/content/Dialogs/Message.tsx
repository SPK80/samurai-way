import s from "./Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../redux/reducers/dialogsPageReducer";

type MessagePropsType = {
    message: MessageType
}

export const Message: React.FC<MessagePropsType> = ({message}) => {
    return (
        <div className={s.message}>{message.text}</div>
    )
}