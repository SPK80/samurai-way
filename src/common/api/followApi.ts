import { instance } from './instance'
import { parseResponse, ResponseWithResultCodeType } from './parseResponse'

export const followApi = {
    async getFollow(userId: number) {
        return instance.get<boolean>('follow/' + userId).then((res) => res.data)
    },
    async follow(userId: number) {
        return instance
            .post<ResponseWithResultCodeType>('follow/' + userId)
            .then(parseResponse)
    },
    async unfollow(userId: number) {
        return instance
            .delete<ResponseWithResultCodeType>('follow/' + userId)
            .then(parseResponse)
    },
}
