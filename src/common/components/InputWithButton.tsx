import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'
import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material'

type PropsType = {
    initialText?: string
    label?: string
    onSubmit: (text: string) => void
    onBlur?: () => void
    isDoNotResetOnSubmit?: boolean
}

export const InputWithButton: React.FC<PropsType> = ({
    label,
    initialText,
    onSubmit,
    onBlur,
    isDoNotResetOnSubmit,
}) => {
    const [text, setText] = useState(initialText ?? '')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value)

    const isSubmitDisabled = text === ''

    const onKeyUpHandler = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        !isSubmitDisabled && e.key === 'Enter' && e.ctrlKey && onClickHandler()

    const onClickHandler = () => {
        !isDoNotResetOnSubmit && setText('')
        onSubmit(text)
    }
    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" onBlur={onBlur}>
            {label && <InputLabel htmlFor="standard-adornment-input">{label}</InputLabel>}
            <Input
                id="standard-adornment-input"
                autoFocus
                type={'text'}
                value={text}
                onChange={onChangeHandler}
                onKeyUp={onKeyUpHandler}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton disabled={isSubmitDisabled} onClick={onClickHandler}>
                            <CheckIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}
