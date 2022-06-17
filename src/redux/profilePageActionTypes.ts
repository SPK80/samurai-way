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

export type ProfilePageActionTypes = AddPostAT | ChangeNewPostTextAT
