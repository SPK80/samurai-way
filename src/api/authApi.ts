import {instance} from "./instance";
import {parseResponse, ResponseType} from "./parseResponse";

export const authApi = {
    async me() {
        return instance.get<ResponseType<{
            id: number
            email: string
            login: string
        }>>('auth/me')
            .then(parseResponse)
    },
    async login(email: string, password: string, rememberMe: boolean = false, captcha: boolean = false) {
        const body = {
            email, password,
            rememberMe, captcha
        }
        return instance.post<ResponseType<{ userId: number }>>('auth/login', body)
            .then(parseResponse)
    },

    async logOut() {
        return instance.delete<ResponseType>('auth/login')
            .then(parseResponse)
    },

}