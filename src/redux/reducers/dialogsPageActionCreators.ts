export const changeNewMessageTextAC = (messageText: string) => ({
    type: "CHANGE-NEW-MESSAGE-TEXT",
    messageText
} as const)

export const addMessageAC = () => ({
    type: "ADD-MESSAGE"
} as const)