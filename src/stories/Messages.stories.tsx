import React from "react";
import {Messages} from "../components/content/Dialogs/Messages";

export default {
    title: 'Messages',
    component: Messages,
}

export const ThreeMessages = () => (
    <Messages
        // messages={[
        //     {id: '1', text: 'First message'},
        //     {id: '2', text: 'This is second message'},
        //     {id: '3', text: 'And last message'},
        // ]}
    />
)

export const EmptyMessages = () => (
    <Messages
        // messages={[]}
    />
)