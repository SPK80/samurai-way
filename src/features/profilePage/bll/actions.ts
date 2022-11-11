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

export const setUserProfileAC = (userProfile: UserProfileWithPhotosType | null) =>
    ({
        type: 'SET-USER-PROFILE',
        userProfile,
    } as const)

export const setUserPhotosAC = (photos: UserPhotosType) =>
    ({
        type: 'SET-USER-PHOTOS',
        photos: photos.photos,
    } as const)

export const addLikeAC = (userPostId: string) =>
    ({
        type: 'ADD-LIKE',
        id: userPostId,
    } as const)

export const setUserStatusAC = (userId: number, status: string | null) =>
    ({
        type: 'SET-USER-STATUS',
        userId,
        status,
    } as const)

export type ProfilePageActionTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserPhotosAC>
    | ReturnType<typeof addLikeAC>
    | ReturnType<typeof setUserStatusAC>
