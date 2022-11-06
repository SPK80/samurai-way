import { UserPhotosType, UserProfileWithPhotosType } from '../dal/profileApi'

export const addPostAC = () =>
    ({
        type: 'ADD-POST',
    } as const)

export const changeNewPostTextAC = (postText: string) =>
    ({
        type: 'CHANGE-NEW-POST-TEXT',
        postText,
    } as const)

export const setUserProfileAC = (
    userProfile: UserProfileWithPhotosType | null
) =>
    ({
        type: 'SET-USER-PROFILE',
        userProfile,
    } as const)

export const setUserPhotosAC = (photos: UserPhotosType) =>
    ({
        type: 'SET-USER-PHOTOS',
        photos: photos.photos,
    } as const)

export type ProfilePageActionTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserPhotosAC>
