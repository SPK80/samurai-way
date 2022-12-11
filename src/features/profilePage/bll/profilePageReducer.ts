import { v1 } from 'uuid'
import { UserProfileWithPhotosType } from '../dal/profileApi'
import { ProfilePageActionTypes } from './actions'

export type PostType = {
    id: string
    text: string
    likesCount: number
}

export type ProfilePageStateType = {
    userProfile: UserProfileWithPhotosType | null
    userStatus: string | null
    userPosts: Array<PostType>
}

const initialState: ProfilePageStateType = {
    userProfile: null,
    userStatus: '',
    userPosts: [
        {
            id: v1(),
            text: 'Hi! Its my thirst post.\nIt`s cool',
            likesCount: 1,
        },
        {
            id: v1(),
            text: 'Yo! This is second post.\nIt nice too ))',
            likesCount: 2,
        },
    ],
}

export const profilePageReducer = (
    state: ProfilePageStateType = initialState,
    action: ProfilePageActionTypes
): ProfilePageStateType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                userPosts: [
                    ...state.userPosts,
                    {
                        id: v1(),
                        text: action.newPostText,
                        likesCount: 0,
                    },
                ],
            }

        case 'SET-USER-PROFILE':
            return { ...state, userProfile: action.userProfile }

        case 'SET-USER-PROFILE-DATA':
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    ...action.userProfileData,
                } as UserProfileWithPhotosType,
            }

        case 'SET-USER-PHOTOS':
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    photos: action.photos,
                } as UserProfileWithPhotosType,
            }

        case 'ADD-LIKE':
            return {
                ...state,
                userPosts: state.userPosts.map((p) =>
                    p.id === action.id ? { ...p, likesCount: p.likesCount + 1 } : p
                ),
            }
        case 'SET-USER-STATUS':
            return { ...state, userStatus: action.status }
        default:
            return state
    }
}
