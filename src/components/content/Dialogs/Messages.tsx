import {MessageType} from "../../../redux/stateTypes";
import React from "react";
import s from "./Dialogs.module.css";
import {Message} from "./Message";

type MessagesPropsType = {
    messages: Array<MessageType>
}
export const Messages: React.FC<MessagesPropsType> = ({messages}) => {
    
    return (
        <div className={s.messages}>
            {messages.map(m =>
                <Message key={m.id}{...m} />)}
        </div>
    )
}

