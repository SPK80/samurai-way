import {DialogsPageType} from "../stateTypes";
import {DialogsPageActionTypes} from "../dialogsPageActionTypes";
import {v1} from "uuid";

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

const initialState: DialogsPageType = {
    newMessageText: '',
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
    ],
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your?'},
        {id: v1(), message: 'Yo'},
    ]
}

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