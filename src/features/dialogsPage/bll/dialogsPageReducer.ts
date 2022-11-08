import { v1 } from 'uuid'
import { DialogsPageActionTypes } from './actions'

// const addMessage = (state: DialogsPageType): DialogsPageType => {
//     const newMessageText = state.newMessageText
//     return {
//         ...state,
//         newMessageText: '',
//         messages: [
//             ...state.messages,
//             {
//                 id: v1(),
//                 text: newMessageText,
//             },
//         ],
//     }
// }

const changeNewMessageText = (state: DialogsPageStateType, newMessageText: string): DialogsPageStateType => {
    return {
        ...state,
        newMessageText,
    }
}

const initialState: DialogsPageStateType = {
    newMessageText: '',
    currentDialogId: null,
    dialogs: {
        [v1()]: {
            title: 'First dialog',
            messages: [
                { id: v1(), text: 'Hi', userId: 0 },
                { id: v1(), text: 'How is your?', userId: 2 },
            ],
        },
        [v1()]: {
            title: 'Second dialog',
            messages: [
                { id: v1(), text: 'Yo', userId: 0 },
                { id: v1(), text: 'What`s up!?', userId: 3 },
            ],
        },
    },
}

export const dialogsPageReducer = (
    state: DialogsPageStateType = initialState,
    action: DialogsPageActionTypes
): DialogsPageStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                newMessageText: '',
                dialogs: {
                    ...state.dialogs,
                    [action.dialogId]: {
                        ...state.dialogs[action.dialogId],
                        messages: [
                            ...state.dialogs[action.dialogId].messages,
                            {
                                id: v1(),
                                userId: action.userId,
                                text: action.text,
                            },
                        ],
                    },
                },
            }

        case 'CHANGE-NEW-MESSAGE-TEXT':
            return changeNewMessageText(state, action.messageText)

        default:
            return state
    }
}

//===TYPES====================================================================================================

export type MessageType = {
    id: string
    userId: number
    text: string
}

export type DialogType = {
    title: string
    messages: MessageType[]
}

export type DialogsType = {
    [dialogIndex: string]: DialogType
}

export type DialogsPageStateType = {
    newMessageText: string
    currentDialogId: string | null
    dialogs: DialogsType
}
