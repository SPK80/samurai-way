import React from "react";
import s from './Dialogs.module.css';
import {Dialog} from "./Dialog";
import {DialogType} from "../../../redux/stateTypes";

type DialogsPropsType = {
    state: Array<DialogType>
}

export const Dialogs: React.FC<DialogsPropsType> = ({state}) => {
    
    return (
        <div className={s.dialogsItems}>
            {state.map(dialog =>
                <Dialog
                    key={dialog.id}
                    state={dialog}
                />)}
        </div>
    )
}


