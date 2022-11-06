import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'app'
import { addMessageAC, changeNewMessageTextAC } from '../bll/actions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export const NewMessage: React.FC = () => {
    const newMessageTextState = useAppSelector(
        (state) => state.dialogsPage.newMessageText
    )

    const dispatch = useDispatch()
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        dispatch(changeNewMessageTextAC(e.currentTarget.value))
    const onClickHandler = () => dispatch(addMessageAC())

    return (
        <>
            <TextField
                multiline
                fullWidth
                id="outline
                d-basic"
                label="New Message"
                variant="outlined"
                sx={{ mb: 1 }}
                value={newMessageTextState}
                onChange={onChangeHandler}
            />
            <Button variant={'outlined'} onClick={onClickHandler}>
                Add
            </Button>
        </>
    )
}
