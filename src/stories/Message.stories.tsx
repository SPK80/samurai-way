import React from "react";
import {Message} from "../components/content/Dialogs/Message";

export default {
    title: 'Message',
    component: Message,
}

export const WelcomeMessage = () => (
    <Message
        message={{id: '1', text: 'Welcome'}}
    />
)