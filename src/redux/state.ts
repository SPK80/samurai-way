import {v1} from "uuid";

export type MessageType = {
    id: string
    message: string
}

type DialogType = {
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

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
    
    profilePage: {
        userProfile: {
            avatar: "https://avatars.githubusercontent.com/u/36849366?v=4",
            name: 'Pavel',
            age: 41,
            birthday: 'June 24',
            gender: 'male',
            website: 'https://github.com/SPK80',
            description: 'FrontEnd developer',
        },
        newPostText: '',
        userPosts: [
            {id: v1(), message: 'Hello', likesCount: 3},
            {id: v1(), message: 'Yo Yo Yo!', likesCount: 5},
        ]
    },
    
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Dimych'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Sveta'},
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your?'},
            {id: v1(), message: 'Yo'},
        ]
    },
    
    sidebar: {}
}

let rerender = () => {

}

export const subscribe = (rerenderCallBack: () => void) => {
    rerender = rerenderCallBack
}

export const addPost = () => {
    const newPostText = state.profilePage.newPostText
    state = {
        ...state,
        profilePage: {
            ...state.profilePage,
            newPostText: '',
            userPosts: [
                ...state.profilePage.userPosts,
                {
                    id: v1(),
                    message: newPostText,
                    likesCount: 0
                }
            ]
        }
    }
    rerender()
}
export const changeNewPost = (newPostText: string) => {
    state = {
        ...state,
        profilePage: {
            ...state.profilePage,
            newPostText
        }
    }
    rerender()
}