import React, {ChangeEvent} from "react";
import {ActionTypes, addMessageAC, changeNewMessageTextAC} from "../../../redux/actions";
import s from './Dialogs.module.css'

type NewMessagePagePropsType = {
    state: string
    dispatch: (action: ActionTypes) => void
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