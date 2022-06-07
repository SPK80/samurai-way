export type ActionTypes = AddPostActionType | ChangeNewPostTextActionType

export type AddPostActionType = {
    type: "ADD-POST"
}

export type ChangeNewPostTextActionType = {
    type: "CHANGE-NEW-POST-TEXT"
    postText: string
}