import React from "react";
import s from './Dialogs.module.css';
import {Dialog} from "./Dialog";
import {Message} from "./Message";
import {DialogsPageType} from "../../../redux/types";

type DialogsPagePropsType = {
    state: DialogsPageType
}

export const Dialogs: React.FC<DialogsPagePropsType> = ({state}) => {
    
    return (
        <div className={s.dialogs}>
            
            <div className={s.dialogsItems}>
                {state.dialogs.map(dialog =>
                    <Dialog
                        key={dialog.id}
                        state={dialog}
                    />)}
            </div>
            
            <div className={s.messages}>
                {state.messages.map(m =>
                    <Message key={m.id}{...m} />)}
            </div>
        
        </div>
    )
}