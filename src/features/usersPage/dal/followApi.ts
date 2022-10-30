import { instance } from 'common/api/instance'
import { DataResponseType } from 'common/api/responseTypes'
import {
    axiosErrorToString,
    parseAxiosResponse,
    parseDataResponse,
} from 'common/api/responseParsers'

export const followApi = {
    async getFollowed(userId: number) {
        return instance
            .get<boolean>('follow/' + userId)
            .then(parseAxiosResponse)
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
