import {instance} from "./instance";
import {UserProfileType} from "../bll/reducers/profilePageReducer";

export const profileApi = {
    async getProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`,)
            .then(value => value.data)
    },
}