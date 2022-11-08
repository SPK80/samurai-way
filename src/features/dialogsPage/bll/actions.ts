export const changeNewMessageTextAC = (messageText: string) =>
    ({
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        messageText,
    } as const)

export const addMessageAC = (dialogId: string, userId: number, text: string) =>
    ({
        type: 'ADD-MESSAGE',
        dialogId,
        userId,
        text,
    } as const)

export type DialogsPageActionTypes = ReturnType<typeof changeNewMessageTextAC> | ReturnType<typeof addMessageAC>
