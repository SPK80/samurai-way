import {instance} from "./instance";
import {AxiosRequestConfig, AxiosResponse} from "axios";

type AuthResponseType<DT> = {
    resultCode: number
    messages: string[]
    data: DT
}
const config: AxiosRequestConfig = {
    withCredentials: true
}

const parseResponse = <DT>(res: AxiosResponse<AuthResponseType<DT>>): Promise<DT> => {
    const {data, messages, resultCode} = res.data;
    if (resultCode === 0) return Promise.resolve(data)
    else return Promise.reject(messages)
}

export const authApi = {
    async me() {
        return instance.get<AuthResponseType<{
            id: number
            email: string
            login: string
        }>>('auth/me', config)
            .then(parseResponse)
    },
    async login(email: string, password: string, rememberMe: boolean = false, captcha: boolean = false) {
        const body = {
            email, password,
            rememberMe, captcha
        }
        return instance.post<AuthResponseType<{ userId: number }>>('auth/login', body, config)
            .then(parseResponse)
    },
}