import React from "react";
import s from './Dialogs.module.css';
import {Dialog} from "./Dialog";
import {Message} from "./Message";
import {DialogsPageType} from "../../../redux/state";

export const Dialogs: React.FC<DialogsPageType> = (props) => {
    
    return (
        <div className={s.dialogs}>
            
            <div className={s.dialogsItems}>
                {props.dialogs.map(d =>
                    <Dialog
                        key={d.id}
                        {...d}
                    />)}
            </div>
            
            <div className={s.messages}>
                {props.messages.map(m =>
                    <Message key={m.id}{...m} />)}
            </div>
        
        </div>
    )
}