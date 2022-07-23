import {instance} from "./instance";
import {UserProfileType} from "../bll/reducers/profilePageReducer";

export const profileApi = {
    async getProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`)
            .then(value => value.data)
    },
    async getStatus(userId: number) {
        return instance.get<UserProfileType>(`profile/status/${userId}`)
            .then(value => value.data)
    },
    async isFollow(userId: number) {
        return instance.get<UserProfileType>(`profile/follow/${userId}`)
            .then(value => value.data)
    },
}