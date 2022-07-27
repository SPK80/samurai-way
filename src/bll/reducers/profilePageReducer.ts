import {v1} from "uuid";
import {addPostAC, changeNewPostTextAC, setUserProfileAC} from "./profilePageActionCreators";

export type PostType = {
    id: string
    text: string
    likesCount: number
}

export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small?: string
        large?: string
    }
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
                text: newPostText,
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

export type ProfilePageType = {
    userProfile: UserProfileType | null
    newPostText: string
    userPosts: Array<PostType>
}

const initialState: ProfilePageType = {
    userProfile: null,
    newPostText: '',
    userPosts: [],
}

type ProfilePageActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>

export const profilePageReducer = (state: ProfilePageType = initialState, action: ProfilePageActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return addPost(state)
        
        case "CHANGE-NEW-POST-TEXT":
            return changeNewPostText(state, action.postText)
        
        case "SET-USER-PROFILE":
            return {...state, userProfile: action.userProfile}
        
        default:
            return state
    }
}