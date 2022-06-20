export const addPostAC = () => ({
    type: "ADD-POST"
} as const)

export const changeNewPostTextAC = (postText: string) => ({
    type: "CHANGE-NEW-POST-TEXT",
    postText
} as const)