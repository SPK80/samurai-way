import React, { memo } from 'react'
import s from './Dialogs.module.css'
import { Message } from './Message'
import { useAppSelector } from 'app/bll/store'

export const Messages: React.FC = memo(() => {
    const messagesState = useAppSelector((state) => state.dialogsPage.messages)
    return (
        <div className={s.messages}>
            {messagesState.map((m) => (
                <Message key={m.id} message={m} />
            ))}
        </div>
    )
})
