import {v1} from "uuid";
import {addPostAC, changeNewPostTextAC} from "./profilePageActionCreators";

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type UserProfileType = {
    avatar: string
    name: string
    age: number
    birthday: string
    gender: 'male' | 'female'
    website: string
    description: string
}

const addPost = (state: ProfilePageType): ProfilePageType => {
    const newPostText = state.newPostText
    return {
        ...state,
        newPostText: '',
        userPosts: [
            ...state.userPosts,
            {
                id: v1(),
                message: newPostText,
                likesCount: 0
            }
        ]
    }
}

const changeNewPostText = (state: ProfilePageType, newPostText: string): ProfilePageType => {
    return {
        ...state,
        newPostText
    }
}

type ProfilePageType = typeof initialState

const initialState = {
    userProfile: {
        avatar: "https://avatars.githubusercontent.com/u/36849366?v=4",
        name: 'Pavel',
        age: 41,
        birthday: 'June 24',
        gender: 'male',
        website: 'https://github.com/SPK80',
        description: 'FrontEnd developer',
    } as UserProfileType,
    newPostText: '' as string,
    userPosts: [
        {id: v1(), message: 'Hello', likesCount: 3},
        {id: v1(), message: 'Yo Yo Yo!', likesCount: 5},
    ] as Array<PostType>
}

type ProfilePageActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostTextAC>

export const profilePageReducer = (state: ProfilePageType = initialState, action: ProfilePageActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return addPost(state)
        
        case "CHANGE-NEW-POST-TEXT":
            return changeNewPostText(state, action.postText)
        
        default:
            return state
    }
}