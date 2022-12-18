import React, { useEffect, useRef, useState } from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'

export const FocusingTextField: React.FC<TextFieldProps & { focus?: boolean }> = ({
    focus,
    ...restProps
}) => {
    const [focusing, setFocusing] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        if (!focus || !focusing || !inputRef?.current) return
        const input = inputRef?.current as HTMLElement
        input.focus()
    })

    if (!focus) return <TextField {...restProps} />

    return (
        <TextField
            inputRef={inputRef}
            onFocus={() => setFocusing(true)}
            onBlur={() => setFocusing(false)}
            {...restProps}
        />
    )
}
