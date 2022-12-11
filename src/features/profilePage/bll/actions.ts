import { UserPhotosType, UserProfileType, UserProfileWithPhotosType } from '../dal/profileApi'

export const addPostAC = (newPostText: string) =>
    ({
        type: 'ADD-POST',
        newPostText,
    } as const)

export const setUserProfileAC = (userProfile: UserProfileWithPhotosType | null) =>
    ({
        type: 'SET-USER-PROFILE',
        userProfile,
    } as const)

export const setUserProfileDataAC = (userProfileData: UserProfileType | null) =>
    ({
        type: 'SET-USER-PROFILE-DATA',
        userProfileData,
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

export const setUserStatusAC = (status: string | null) =>
    ({
        type: 'SET-USER-STATUS',
        status,
    } as const)

export type ProfilePageActionTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserPhotosAC>
    | ReturnType<typeof addLikeAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof setUserProfileDataAC>
