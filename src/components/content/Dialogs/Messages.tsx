import React, {memo} from "react";
import {useSelector} from "react-redux";
import s from "./Dialogs.module.css";
import {Message} from "./Message";
import {MessageType} from "../../../redux/reducers/dialogsPageReducer";
import {AppStateType} from "../../../redux/redux-store";

export const Messages: React.FC = memo(() => {
    const messagesState = useSelector<AppStateType, Array<MessageType>>(state => state.dialogsPage.messages)
    return (
        <div className={s.messages}>
            {messagesState.map(m =>
                <Message
                    key={m.id}
                    message={m}
                />
            )}
        </div>
    )
})