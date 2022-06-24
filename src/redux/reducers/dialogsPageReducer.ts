import {v1} from "uuid";
import {addMessageAC, changeNewMessageTextAC} from "./dialogsPageActionCreators";

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
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
                message: newMessageText
            }
        ]
    }
}

const changeNewMessageText = (state: DialogsPageType, newMessageText: string): DialogsPageType => {
    return {
        ...state,
        newMessageText
    }
}

export type DialogsPageType = typeof initialState

const initialState = {
    newMessageText: '',
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
    ] as Array<DialogType>,
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your?'},
        {id: v1(), message: 'Yo'},
    ] as Array<MessageType>,
}


type DialogsPageActionTypes = ReturnType<typeof changeNewMessageTextAC> | ReturnType<typeof addMessageAC>

export const dialogsPageReducer = (state: DialogsPageType = initialState, action: DialogsPageActionTypes): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return addMessage(state)
        
        case "CHANGE-NEW-MESSAGE-TEXT":
            return changeNewMessageText(state, action.messageText)
        
        default:
            return state
    }
}