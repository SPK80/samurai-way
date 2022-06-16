import React from 'react';
import {Dialogs} from "./Dialogs";
import {DialogsPageType} from "../../../redux/stateTypes";
import {Messages} from "./Messages";
import {NewMessage} from "./NewMessage";
import {ActionTypes} from "../../../redux/actions";


type DialogsPagePropsType = {
    state: DialogsPageType
    dispatch: (action: ActionTypes) => void
}

export const DialogsPage: React.FC<DialogsPagePropsType> = ({state, dispatch}) => {
    return (
        <div>
            <NewMessage state={state.newMessageText} dispatch={dispatch}/>
            
            <Dialogs state={state.dialogs}/>
            
            <Messages state={state.messages}/>
        </div>
    )
}