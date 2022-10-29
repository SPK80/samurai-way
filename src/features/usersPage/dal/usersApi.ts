import { UserType } from 'features/usersPage/bll/usersPageReducer'
import { instance } from 'common/api/instance'
import {
    parseAxiosResponse,
    parseItemsResponse,
} from 'common/api/responseParsers'
import { ItemsResponseType } from 'common/api/responseTypes'

export const usersApi = {
    async getUsers(page: number = 1, count: number = 10) {
        return instance
            .get<ItemsResponseType<UserType>>('users', {
                params: { page, count },
            })
            .then(parseAxiosResponse)
            .then(parseItemsResponse)
    },
}
