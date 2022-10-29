import { v1 } from 'uuid'
import { UserProfileWithPhotosType } from '../dal/profileApi'
import { ProfilePageActionTypes } from './actions'

export type PostType = {
    id: string
    text: string
    likesCount: number
}

const addPost = (state: ProfilePageStateType): ProfilePageStateType => {
    const newPostText = state.newPostText
    return {
        ...state,
        newPostText: '',
        userPosts: [
            ...state.userPosts,
            {
                id: v1(),
                text: newPostText,
                likesCount: 0,
            },
        ],
    }
}

const changeNewPostText = (
    state: ProfilePageStateType,
    newPostText: string
): ProfilePageStateType => {
    return {
        ...state,
        newPostText,
    }
}

export type ProfilePageStateType = {
    userProfile: UserProfileWithPhotosType | null
    newPostText: string
    userPosts: Array<PostType>
}

const initialState: ProfilePageStateType = {
    userProfile: null,
    newPostText: '',
    userPosts: [],
}

export const profilePageReducer = (
    state: ProfilePageStateType = initialState,
    action: ProfilePageActionTypes
): ProfilePageStateType => {
    switch (action.type) {
        case 'ADD-POST':
            return addPost(state)

        case 'CHANGE-NEW-POST-TEXT':
            return changeNewPostText(state, action.postText)

        case 'SET-USER-PROFILE':
            return { ...state, userProfile: action.userProfile }

        default:
            return state
    }
}
