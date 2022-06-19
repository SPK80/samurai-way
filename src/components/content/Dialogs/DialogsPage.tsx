import React from 'react';
import s from './Dialogs.module.css'
import {StoreType} from "../../../redux/redux-store";
import {DialogsContainer} from "./DialogsContainer";
import {MessagesContainer} from "./MessagesContainer";
import {NewMessageContainer} from "./NewMessageContainer";


type DialogsPagePropsType = {
    store: StoreType
}

export const DialogsPage: React.FC<DialogsPagePropsType> = ({store}) => {
    return (
        <>
            <NewMessageContainer store={store}/>
            <div className={s.dialogs}>
                <DialogsContainer store={store}/>
                <MessagesContainer store={store}/>
            </div>
        </>
    )
}