import { instance } from 'common/api/instance'
import {
    UserProfileType,
    UserProfileWithoutPhotosType,
} from '../bll/profilePageReducer'
import { parseResponse, ResponseType } from 'common/api/parseResponse'

export const profileApi = {
    async getProfile(userId: number) {
        return instance
            .get<UserProfileType>(`profile/${userId}`)
            .then((value) => value.data)
    },
    async setProfile(profile: UserProfileWithoutPhotosType) {
        return instance
            .put<ResponseType>(`profile`, profile)
            .then(parseResponse)
    },
    async getStatus(userId: number) {
        return instance
            .get<string | null>(`profile/status/${userId}`)
            .then((value) => value.data)
    },
    async setStatus() {
        return instance.put<ResponseType>(`profile/status`).then(parseResponse)
    },
}