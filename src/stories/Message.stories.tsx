import React from 'react'
import { Message } from 'features/dialogsPage/ui/Message'

export default {
    title: 'Message',
    component: Message,
}

export const WelcomeMessage = () => (
    <Message
        message={{ id: '1', text: 'Welcome', userId: 0 }}
        userProfile={{
            userId: 0,
            fullName: 'test user',
            aboutMe: '',
            lookingForAJob: false,
            lookingForAJobDescription: '',
            photos: { large: undefined, small: undefined },
            contacts: {
                github: '',
                facebook: '',
                instagram: '',
                mainLink: '',
                twitter: '',
                vk: '',
                website: '',
                youtube: '',
            },
        }}
    />
)
