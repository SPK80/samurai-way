type ChangeNewMessageTextAT = {
    type: "CHANGE-NEW-MESSAGE-TEXT"
    messageText: string
}

export const changeNewMessageTextAC = (messageText: string): ChangeNewMessageTextAT => ({
    type: "CHANGE-NEW-MESSAGE-TEXT",
    messageText
})

type AddMessageAT = {
    type: "ADD-MESSAGE"
}

export const addMessageAC = (): AddMessageAT => ({
    type: "ADD-MESSAGE"
})

export type DialogsPageActionTypes = ChangeNewMessageTextAT | AddMessageAT