export const changeNewMessageTextAC = (messageText: string) =>
    ({
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        messageText,
    } as const)

export const addMessageAC = () =>
    ({
        type: 'ADD-MESSAGE',
    } as const)

export type DialogsPageActionTypes =
    | ReturnType<typeof changeNewMessageTextAC>
    | ReturnType<typeof addMessageAC>
