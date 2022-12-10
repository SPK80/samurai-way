import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'

type PropsType = {
    label?: string
    onSubmit: (text: string) => void
    onBlur?: () => void
    isDoNotResetOnSubmit?: boolean
}

export const SendTextBox: React.FC<PropsType> = ({
    label,
    onSubmit,
    onBlur,
    isDoNotResetOnSubmit,
}) => {
    const [text, setText] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value)

    const isSubmitDisabled = text === ''

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) =>
        !isSubmitDisabled && e.key === 'Enter' && e.ctrlKey && onClickHandler()

    const onClickHandler = () => {
        !isDoNotResetOnSubmit && setText('')
        onSubmit(text)
    }

    return (
        <Box onBlur={onBlur} display="flex" alignItems="flex-end" width="70%">
            <TextField
                multiline
                fullWidth
                sx={{ width: '100%' }}
                autoFocus
                label={label ?? 'New Message'}
                variant="outlined"
                value={text}
                onChange={onChangeHandler}
                onKeyUp={onKeyUpHandler}
            />
            <IconButton
                type="button"
                disabled={isSubmitDisabled}
                color="primary"
                sx={{ mb: 1 }}
                onClick={onClickHandler}
            >
                <SendIcon />
            </IconButton>
        </Box>
    )
}
