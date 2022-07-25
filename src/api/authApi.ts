import {instance} from "./instance";
import {AxiosRequestConfig} from "axios";

type AuthResponseType<DT> = {
    resultCode: number
    messages: string[]
    data: DT
}
const config: AxiosRequestConfig = {
    withCredentials: true
}

export const authApi = {
    async me() {
        return instance.get<AuthResponseType<{
            id: number
            email: string
            login: string
        }>>('auth/me', config)
            .then(res => res.data)
    },
    async login(email: string, password: string, rememberMe: boolean = false, captcha: boolean = false) {
        const body = {
            email, password,
            rememberMe, captcha
        }
        
        return instance.post<AuthResponseType<{ userId: number }>>('auth/login', body, config)
            .then(res => res.data)
    },
}