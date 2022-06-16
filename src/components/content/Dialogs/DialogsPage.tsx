import React from 'react';
import {Dialogs} from "./Dialogs";
import {DialogsPageType} from "../../../redux/stateTypes";
import {Messages} from "./Messages";
import {NewMessage} from "./NewMessage";
import {ActionTypes} from "../../../redux/actions";
import s from './Dialogs.module.css'


type DialogsPagePropsType = {
    state: DialogsPageType
    dispatch: (action: ActionTypes) => void
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