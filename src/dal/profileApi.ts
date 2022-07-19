import {instance} from "./instance";

type  ProfileResponseType = {
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
} | { message: string }

export const profileApi = {
    async getProfile(userId: number) {
        return instance.get<ProfileResponseType>(`profile/${userId}`,)
            .then(res => res.data)
    },
}