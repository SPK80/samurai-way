import { instance } from './instance'
import { DataResponseType } from './responseTypes'
import {
    axiosErrorToString,
    parseAxiosResponse,
    parseDataResponse,
} from './responseParsers'

export const followApi = {
    async getFollow(userId: number) {
        return instance.get<boolean>('follow/' + userId).then((res) => res.data)
    },
    async follow(userId: number) {
        return instance
            .post<DataResponseType>('follow/' + userId)
            .then(parseAxiosResponse)
            .catch(axiosErrorToString)
            .then(parseDataResponse)
    },
    async unfollow(userId: number) {
        return instance
            .delete<DataResponseType>('follow/' + userId)
            .then(parseAxiosResponse)
            .catch(axiosErrorToString)
            .then(parseDataResponse)
    },
}
