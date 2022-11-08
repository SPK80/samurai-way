import React, { ChangeEvent, KeyboardEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'app'
import { changeNewMessageTextAC } from '../bll/actions'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'

type PropsType = {
    onSubmit: (text: string) => void
}

export const NewMessage: React.FC<PropsType> = ({ onSubmit }) => {
    const newMessageText = useAppSelector((state) => state.dialogsPage.newMessageText)
    const denialToSubmit = newMessageText === ''
    const dispatch = useDispatch()
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        dispatch(changeNewMessageTextAC(e.currentTarget.value))
    const onClickHandler = () => {
        onSubmit(newMessageText)
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key, e.ctrlKey, denialToSubmit)
        if (e.key === 'Enter' && e.ctrlKey && !denialToSubmit) onClickHandler()
    }

    return (
        <Box display="flex" alignItems="flex-end" width="70%">
            <TextField
                multiline
                fullWidth
                sx={{ width: '100%' }}
                autoFocus
                label="New Message"
                variant="outlined"
                value={newMessageText}
                onChange={onChangeHandler}
                onKeyUp={onKeyUpHandler}
            />
            <IconButton
                type="button"
                disabled={denialToSubmit}
                color="primary"
                sx={{ mb: 1 }}
                onClick={onClickHandler}
            >
                <SendIcon />
            </IconButton>
        </Box>
    )
}
