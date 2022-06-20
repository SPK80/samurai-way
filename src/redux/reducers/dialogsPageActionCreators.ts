export const changeNewMessageTextAC = (messageText: string) => ({
    type: "CHANGE-NEW-MESSAGE-TEXT" as const,
    messageText
})

export const addMessageAC = () => ({
    type: "ADD-MESSAGE" as const
})