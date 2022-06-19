import React from 'react';
import s from './Dialogs.module.css'
import {DialogsContainer} from "./DialogsContainer";
import {MessagesContainer} from "./MessagesContainer";
import {NewMessageContainer} from "./NewMessageContainer";

export const DialogsPage: React.FC = () => {
    return (
        <>
            <NewMessageContainer/>
            <div className={s.dialogs}>
                <DialogsContainer/>
                <MessagesContainer/>
            </div>
        </>
    )
}