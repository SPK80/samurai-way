import React, { memo } from 'react'
import s from './Dialogs.module.css'
import { Dialog } from './Dialog'
import { useAppSelector } from 'app/bll/store'

export const Dialogs: React.FC = memo(() => {
    const dialogsState = useAppSelector((state) => state.dialogsPage.dialogs)

    return (
        <div className={s.dialogsItems}>
            {dialogsState.map((dialog) => (
                <Dialog key={dialog.id} state={dialog} />
            ))}
        </div>
    )
})
