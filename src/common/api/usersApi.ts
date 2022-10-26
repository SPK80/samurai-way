import { UserType } from 'features/usersPage/bll/usersPageReducer'
import { instance } from './instance'

type UsersResponseType = {
    items: Array<UserType> //| UserType
    totalCount?: number
    error?: string
}

export const usersApi = {
    async getUsers(page: number = 1, count: number = 10) {
        return instance
            .get<UsersResponseType>('users', { params: { page, count } })
            .then((res) => res.data)
    },
}
