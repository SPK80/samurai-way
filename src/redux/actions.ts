type AddPostAT = {
    type: "ADD-POST"
}

export const addPostAC = (): AddPostAT => ({
    type: "ADD-POST"
})

type ChangeNewPostTextAT = {
    type: "CHANGE-NEW-POST-TEXT"
    postText: string
}

export const changeNewPostTextAC = (postText: string): ChangeNewPostTextAT => ({
    type: "CHANGE-NEW-POST-TEXT",
    postText
})

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

export type ActionTypes = AddPostAT | ChangeNewPostTextAT | ChangeNewMessageTextAT | AddMessageAT