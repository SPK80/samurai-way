import {UserProfileType} from "./profilePageReducer";

export const addPostAC = () => ({
    type: "ADD-POST"
} as const)

export const changeNewPostTextAC = (postText: string) => ({
    type: "CHANGE-NEW-POST-TEXT",
    postText
} as const)

export const setUserProfileAC = (userProfile: UserProfileType | null) => ({
    type: "SET-USER-PROFILE",
    userProfile
} as const)