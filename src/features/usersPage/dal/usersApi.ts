import { UserType } from 'features/usersPage/bll/usersPageReducer'
import { instance } from 'common/api/instance'
import {
    axiosErrorToString,
    parseAxiosResponse,
    parseItemsResponse,
} from 'common/api/responseParsers'
import { ItemsResponseType } from 'common/api/responseTypes'

export type UsersRequestType = {
    page?: number
    count?: number
    friend?: boolean
    term?: string
}

export const usersApi = {
    async getUsers(params: UsersRequestType) {
        return instance
            .get<ItemsResponseType<UserType>>('users', {
                params,
            })
            .then(parseAxiosResponse)
            .catch(axiosErrorToString)
            .then(parseItemsResponse)
    },
}
