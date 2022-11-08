import React, { memo } from 'react'
import { Dialog } from './Dialog'
import { MenuList } from '@mui/material'

type PropsType = {
    dialogs: Array<{
        id: string
        title: string
    }>
    currentDialog: string | null
}

export const Dialogs: React.FC<PropsType> = memo(({ dialogs, currentDialog }) => {
    return (
        <MenuList variant="selectedMenu">
            {dialogs.map(({ id, title }) => (
                <Dialog key={id} id={id} title={title} selected={currentDialog === id} />
            ))}
        </MenuList>
    )
})
