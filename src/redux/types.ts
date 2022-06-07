import {ActionTypes} from "./actionTypes";

export type MessageType = {
    id: string
    message: string
}

export type DialogType = {
    id: string
    name: string
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type  UserProfileType = {
    avatar: string
    name: string
    age: number
    birthday: string
    gender: 'male' | 'female'
    website: string
    description: string
}

export type ProfilePageType = {
    userProfile: UserProfileType
    newPostText: string
    userPosts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    _changeNewPost: (newPostText: string) => void
    _addPost: () => void
    dispatch: (action: ActionTypes) => void
    getState: () => RootStateType;
    subscribe: (callBack: () => void) => void
}