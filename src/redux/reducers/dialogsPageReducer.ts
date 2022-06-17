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

export const dialogsPageReducer = (state: DialogsPageType, action: DialogsPageActionTypes): DialogsPageType => {
    
    switch (action.type) {
        case "ADD-MESSAGE":
            return addMessage(state)
        
        case "CHANGE-NEW-MESSAGE-TEXT":
            return changeNewMessageText(state, action.messageText)
        
        default:
            return state
    }
    
}