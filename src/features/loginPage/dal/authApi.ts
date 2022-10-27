import { instance } from 'common/api/instance'
import { DataResponseType } from 'common/api/responseTypes'
import {
    axiosErrorToString,
    parseAxiosResponse,
    parseDataResponse,
} from 'common/api/responseParsers'

export type LoginDataType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}

export type AuthUserDataType = {
    id: number
    email: string
    login: string
}

export const authApi = {
    async me() {
        return instance
            .get<DataResponseType<AuthUserDataType>>('auth/me')
            .then(parseAxiosResponse)
            .catch(axiosErrorToString)
            .then(parseDataResponse)
    },
    async login(data: LoginDataType) {
        return instance
            .post<DataResponseType<{ userId: number }>>('auth/login', data)
            .then(parseAxiosResponse)
            .catch(axiosErrorToString)
            .then(parseDataResponse)
    },
    async logout() {
        return instance
            .delete<DataResponseType>('auth/login')
            .then(parseAxiosResponse)
            .catch(axiosErrorToString)
            .then(parseDataResponse)
    },
}
