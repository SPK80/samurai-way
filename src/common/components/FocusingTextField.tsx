import React, { useEffect, useRef, useState } from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'

export const FocusingTextField: React.FC<TextFieldProps & { focus?: boolean }> = ({
    focus,
    ...restProps
}) => {
    const [focusing, setFocusing] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        if (!focus || !focusing || !ref?.current) return
        const textField = ref?.current as HTMLElement
        if (!textField) return

        const input = textField.getElementsByTagName('input')[0]
        input.focus()
    })

    if (!focus) return <TextField {...restProps} />

    return (
        <TextField
            ref={ref}
            onFocus={() => setFocusing(true)}
            onBlur={() => setFocusing(false)}
            {...restProps}
        />
    )
}
