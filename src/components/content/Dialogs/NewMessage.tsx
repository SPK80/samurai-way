import React, {ChangeEvent} from "react";
import {
    addMessageAC,
    changeNewMessageTextAC,
    DialogsPageActionTypes
} from "../../../redux/dialogsPageActionTypes";
import s from './Dialogs.module.css'

type NewMessagePagePropsType = {
    state: string
    dispatch: (action: DialogsPageActionTypes) => void
}

export const NewMessage: React.FC<NewMessagePagePropsType> = ({state, dispatch}) => {
    
    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(changeNewMessageTextAC(e.currentTarget.value))
    }
    
    function onClickHandler() {
        dispatch(addMessageAC())
    }
    
    return (
        <div className={s.newMessage}>
            <textarea
                rows={4} cols={50}
                value={state}
                onChange={onChangeHandler}
            />
            <button onClick={onClickHandler}>Add</button>
        </div>
    )
}