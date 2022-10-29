import { instance } from 'common/api/instance'
import {
    axiosErrorToString,
    parseAxiosResponse,
    parseDataResponse,
} from 'common/api/responseParsers'
import { DataResponseType } from 'common/api/responseTypes'

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
}

export type UserProfileWithPhotosType = UserProfileType & {
    photos: {
        small?: string
        large?: string
    }
}

export const profileApi = {
    async getProfile(userId: number) {
        return instance
            .get<UserProfileWithPhotosType>(`profile/${userId}`)
            .then(parseAxiosResponse)
            .catch(axiosErrorToString)
    },

    async setProfile(profile: UserProfileType) {
        return instance
            .put<DataResponseType>(`profile`, profile)
            .then(parseAxiosResponse)
            .catch(axiosErrorToString)
            .then(parseDataResponse)
    },

    async getStatus(userId: number) {
        return instance
            .get<string | null>(`profile/status/${userId}`)
            .then(parseAxiosResponse)
            .catch(axiosErrorToString)
    },

    async setStatus(status: string) {
        return instance
            .put<DataResponseType>(`profile/status`, { status })
            .then(parseAxiosResponse)
            .catch(axiosErrorToString)
            .then(parseDataResponse)
    },
}
