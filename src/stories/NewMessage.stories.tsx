import React, {useState} from "react";
import {NewMessage} from "../components/content/Dialogs/NewMessage";
import {action} from "@storybook/addon-actions";

export default {
    title: 'NewMessage',
    component: NewMessage,
}

export const TestNewMessage = () => {
    const [messageText, setMessageText] = useState('')
    return (
        <NewMessage
            newMessageText={messageText}
            changeMessage={setMessageText}
            addMessage={action("addMessage")}
        />
    )
}