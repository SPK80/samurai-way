import {instance} from "./instance";
import {UserProfileType, UserProfileWithoutPhotosType} from "../bll/reducers/profilePageReducer";
import {parseResponse, ResponseType} from "./parseResponse";

export const profileApi = {
    async getProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`)
            .then(value => value.data)
    },
    async getStatus(userId: number) {
        return instance.get<string | null>(`profile/status/${userId}`)
            .then(value => value.data)
    },
    async setStatus() {
        return instance.put<ResponseType>(`profile/status`)
            .then(parseResponse)
    },
}