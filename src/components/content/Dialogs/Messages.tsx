import {MessageType} from "../../../redux/stateTypes";
import React from "react";
import s from "./Dialogs.module.css";
import {Message} from "./Message";

type MessagesPropsType = {
    state: Array<MessageType>
}
export const Messages: React.FC<MessagesPropsType> = ({state}) => {
    
    return (
        <div className={s.messages}>
            {state.map(m =>
                <Message key={m.id}{...m} />)}
        </div>
    )
}