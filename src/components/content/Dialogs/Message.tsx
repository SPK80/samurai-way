import s from "./Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../redux/state";

export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}