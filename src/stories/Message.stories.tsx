import React from 'react'
import { Message } from 'features/dialogsPage/ui/Message'

export default {
    title: 'Message',
    component: Message,
}

export const WelcomeMessage = () => (
    <Message message={{ id: '1', text: 'Welcome' }} />
)
