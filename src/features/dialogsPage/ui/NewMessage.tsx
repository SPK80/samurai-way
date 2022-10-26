import React, { ChangeEvent } from 'react'
import s from './Dialogs.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../../app/bll/redux-store'
import {
    addMessageAC,
    changeNewMessageTextAC,
} from '../bll/dialogsPageActionCreators'

export const NewMessage: React.FC = () => {
    const newMessageTextState = useSelector<AppStateType, string>(
        (state) => state.dialogsPage.newMessageText
    )

    const dispatch = useDispatch()
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        dispatch(changeNewMessageTextAC(e.currentTarget.value))
    const onClickHandler = () => dispatch(addMessageAC())

    return (
        <div className={s.newMessage}>
            <textarea
                rows={4}
                cols={50}
                value={newMessageTextState}
                onChange={onChangeHandler}
            />
            <button onClick={onClickHandler}>Add</button>
        </div>
    )
}
