import React from "react";
import s from './Dialogs.module.css';
import {Dialog} from "./Dialog";
import {DialogType} from "../../../redux/reducers/dialogsPageReducer";

type DialogsPropsType = {
    dialogs: Array<DialogType>
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogs}) => {
    
    return (
        <div className={s.dialogsItems}>
            {dialogs.map(dialog =>
                <Dialog
                    key={dialog.id}
                    state={dialog}
                />)}
        </div>
    )
}