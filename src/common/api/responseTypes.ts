export enum ResultCode {
    SUCCESSFUL = 0,
    BAD_RESPONSE = 1,
    BAD_CAPTCHA = 10,
}

export type DataResponseType<T = {}> = {
    data: T
    resultCode: ResultCode
    messages: string[]
}

export type ItemsResponseType<T> = {
    items: Array<T>
    totalCount: number
    error: string
}
