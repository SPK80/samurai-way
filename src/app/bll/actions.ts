import { RequestStatus } from 'common/types'

export const setAppErrorAC = (error: string | null) =>
    ({ type: 'APP/SET-ERROR', error } as const)
export const setAppStatusAC = (status: RequestStatus) =>
    ({ type: 'APP/SET-STATUS', status } as const)
export const setAppInitializedAC = (isInitialized: boolean) =>
    ({
        type: 'APP/SET-IS-INITIALIZED',
        isInitialized,
    } as const)

export type AppActionsType =
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppInitializedAC>
