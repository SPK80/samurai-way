import React from "react";
import s from "./Dialogs.module.css";
import {Message} from "./Message";
import {MessageType} from "../../../redux/reducers/dialogsPageReducer";

type MessagesPropsType = {
    messages: Array<MessageType>
}
export const Messages: React.FC<MessagesPropsType> = ({messages}) => {
    return (
        <div className={s.messages}>
            {messages.map(m =>
                <Message
                    key={m.id}
                    message={m}
                />
            )}
        </div>
    )
}