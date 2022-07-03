import React from 'react';
import s from './Dialogs.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {NewMessage} from "./NewMessage";
import {addMessageAC, changeNewMessageTextAC} from "../../../redux/reducers/dialogsPageActionCreators";
import {Dialogs} from "./Dialogs";
import {DialogType, MessageType} from "../../../redux/reducers/dialogsPageReducer";
import {Messages} from "./Messages";

export const DialogsPage: React.FC = () => {
    
    const newMessageTextState = useSelector<AppStateType, string>(state => state.dialogsPage.newMessageText)
    const dialogsState = useSelector<AppStateType, Array<DialogType>>(state => state.dialogsPage.dialogs)
    const messagesState = useSelector<AppStateType, Array<MessageType>>(state => state.dialogsPage.messages)
    
    const dispatch = useDispatch()
    const dispatchChangeNewMessageText = (text: string) => dispatch(changeNewMessageTextAC(text))
    const dispatchAddMessage = () => dispatch(addMessageAC())
    
    return (
        <div>
            <NewMessage
                newMessageText={newMessageTextState}
                changeMessage={dispatchChangeNewMessageText}
                addMessage={dispatchAddMessage}
            />
            <div className={s.dialogs}>
                <Dialogs
                    dialogs={dialogsState}
                />
                <Messages
                    messages={messagesState}
                />
            </div>
        </div>
    )
}