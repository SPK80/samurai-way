import React, { PropsWithChildren, useState } from 'react'
import { SendTextBox } from 'common/components/SendTextBox'
import Box from '@mui/material/Box'

type PropsType = PropsWithChildren & {
    onSubmit: (text: string) => void
}
export const EditableTextField: React.FC<PropsType> = ({ onSubmit, children }) => {
    const [isEditing, setIsEditing] = useState(false)
    return isEditing ? (
        <SendTextBox onSubmit={onSubmit} onBlur={() => setIsEditing(false)} label={''} />
    ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{children}</span>
    )
}
