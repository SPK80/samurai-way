import React, {ChangeEvent} from "react";
import {ActionTypes, addMessageAC, changeNewMessageTextAC} from "../../../redux/actions";

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
        <div>
            <textarea onChange={onChangeHandler} value={state}/>
            <button onClick={onClickHandler}>Add</button>
        </div>
    )
}