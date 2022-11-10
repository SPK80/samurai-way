import React, { ChangeEvent, KeyboardEvent } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'

type PropsType = {
    text: string
    onChangeText: (text: string) => void
    onSubmit: (text: string) => void
}

export const SendTextBox: React.FC<PropsType> = ({ text, onChangeText, onSubmit }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        onChangeText(e.currentTarget.value)

    const denialToSubmit = text === ''

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && e.ctrlKey && !denialToSubmit) onClickHandler()
    }

    const onClickHandler = () => {
        onSubmit(text)
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
                value={text}
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
