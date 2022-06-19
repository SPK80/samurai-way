import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'

type NewMessagePropsType = {
    newMessageText: string
    changeMessage: (text: string) => void
    addMessage: () => void
}

export const NewMessage: React.FC<NewMessagePropsType> =
    ({
         newMessageText,
         changeMessage,
         addMessage
     }) => {
        
        const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
            changeMessage(e.currentTarget.value)
        
        const onClickHandler = () =>
            addMessage()
        
        return (
            <div className={s.newMessage}>
            <textarea
                rows={4} cols={50}
                value={newMessageText}
                onChange={onChangeHandler}
            />
                <button onClick={onClickHandler}>Add</button>
            </div>
        )
    }

