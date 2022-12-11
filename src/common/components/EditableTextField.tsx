import React, { useState } from 'react'
import { InputWithButton } from './InputWithButton'

type PropsType = {
    text: string
    label?: string
    onSubmit: (text: string) => void
}
export const EditableTextField: React.FC<PropsType> = ({ onSubmit, text, label }) => {
    const [isEditing, setIsEditing] = useState(false)

    const onSubmitHandler = (text: string) => {
        onSubmit(text)
    }

    const onBlurHandler = () => {
        setTimeout(() => setIsEditing(false), 100) //need a delay to call onBlur after onSubmit
    }

    return isEditing ? (
        <InputWithButton
            initialText={text}
            onSubmit={onSubmitHandler}
            label={label}
            onBlur={onBlurHandler}
        />
    ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{text}</span>
    )
}
