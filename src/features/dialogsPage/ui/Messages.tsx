import React, { memo } from 'react'
import { Message } from './Message'
import { MessageType } from '../bll/dialogsPageReducer'

type PropsType = {
    messages: MessageType[]
}

export const Messages: React.FC<PropsType> = memo(({ messages }) => {
    return (
        <>
            {messages.map((m) => (
                <Message key={m.id} message={m} />
            ))}
        </>
    )
})
