import { instance } from 'common/api/instance'
import {
    UserProfileType,
    UserProfileWithoutPhotosType,
} from '../bll/profilePageReducer'
import { responseParsers, DataResponseType } from 'common/api/responseParsers'

export const profileApi = {
    async getProfile(userId: number) {
        return instance
            .get<UserProfileType>(`profile/${userId}`)
            .then((value) => value.data)
    },
    async setProfile(profile: UserProfileWithoutPhotosType) {
        return instance
            .put<DataResponseType>(`profile`, profile)
            .then(responseParsers)
    },
    async getStatus(userId: number) {
        return instance
            .get<string | null>(`profile/status/${userId}`)
            .then((value) => value.data)
    },
    async setStatus() {
        return instance
            .put<DataResponseType>(`profile/status`)
            .then(responseParsers)
    },
}
