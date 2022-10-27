import { AxiosError, AxiosResponse } from 'axios'
import {
    DataResponseType,
    ItemsResponseType,
    ResultCode,
} from './responseTypes'

export const parseAxiosResponse = <T>(res: AxiosResponse<T>): T => res.data

export const axiosErrorToString = (res: AxiosError) =>
    Promise.reject(res.message)

export const parseDataResponse = <T>({
    data,
    messages,
    resultCode,
}: DataResponseType<T>): Promise<T> => {
    if (resultCode !== ResultCode.SUCCESSFUL) return Promise.reject(messages)
    return Promise.resolve(data)
}

export const parseItemsResponse = <T>({
    items,
    totalCount,
    error,
}: ItemsResponseType<T>): Promise<{ totalCount: number; items: Array<T> }> => {
    if (error) return Promise.reject(error)
    return Promise.resolve({ totalCount, items })
}
