import React, {memo} from "react";
import s from './Dialogs.module.css';
import {Dialog} from "./Dialog";
import {DialogType} from "../../../bll/reducers/dialogsPageReducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/redux-store";

export const Dialogs: React.FC = memo(() => {
    const dialogsState = useSelector<AppStateType, Array<DialogType>>(state => state.dialogsPage.dialogs)
    
    return (
        <div className={s.dialogsItems}>
            {
                dialogsState.map(dialog =>
                    <Dialog
                        key={dialog.id}
                        state={dialog}
                    />)
            }
        </div>
    )
})