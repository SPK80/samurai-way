import React from 'react';
import {Dialogs} from "./Dialogs";
import {DialogsPageType} from "../../../redux/stateTypes";
import {Messages} from "./Messages";
import {NewMessage} from "./NewMessage";
import s from './Dialogs.module.css'
import {DialogsPageActionTypes} from "../../../redux/dialogsPageActionTypes";


type DialogsPagePropsType = {
    state: DialogsPageType
    dispatch: (action: DialogsPageActionTypes) => void
}

export const DialogsPage: React.FC<DialogsPagePropsType> = ({state, dispatch}) => {
    return (
        <>
            <NewMessage state={state.newMessageText} dispatch={dispatch}/>
            
            <div className={s.dialogs}>
                <Dialogs state={state.dialogs}/>
                
                <Messages state={state.messages}/>
            </div>
        
        </>
    )
}