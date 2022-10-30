import { v1 } from 'uuid'
import { DialogsPageActionTypes } from './actions'

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    text: string
}

const addMessage = (state: DialogsPageType): DialogsPageType => {
    const newMessageText = state.newMessageText
    return {
        ...state,
        newMessageText: '',
        messages: [
            ...state.messages,
            {
                id: v1(),
                text: newMessageText,
            },
        ],
    }
}

const changeNewMessageText = (
    state: DialogsPageType,
    newMessageText: string
): DialogsPageType => {
    return {
        ...state,
        newMessageText,
    }
}

export type DialogsPageType = typeof initialState

const initialState = {
    newMessageText: '',
    dialogs: [
        { id: v1(), name: 'Dimych' },
        { id: v1(), name: 'Andrey' },
        { id: v1(), name: 'Sveta' },
    ] as Array<DialogType>,
    messages: [
        { id: v1(), text: 'Hi' },
        { id: v1(), text: 'How is your?' },
        { id: v1(), text: 'Yo' },
    ] as Array<MessageType>,
}

export const dialogsPageReducer = (
    state: DialogsPageType = initialState,
    action: DialogsPageActionTypes
): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return addMessage(state)

        case 'CHANGE-NEW-MESSAGE-TEXT':
            return changeNewMessageText(state, action.messageText)

        default:
            return state
    }
}
