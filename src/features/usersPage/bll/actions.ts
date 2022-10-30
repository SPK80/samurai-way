import { UserType } from './usersPageReducer'
import { ErrorType, RequestStatus } from 'common/types'

export const setFollowedAC = (userId: number, followed: boolean) =>
    ({
        type: 'SET-FOLLOW',
        userId,
        followed,
    } as const)

export const setUsersAC = (usersList: Array<UserType>) =>
    ({
        type: 'SET-USERS',
        usersList,
    } as const)

export const setCurrentPageAC = (currentPage: number) =>
    ({
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const)

export const setTotalCountAC = (totalCount: number) =>
    ({
        type: 'SET-TOTAL-COUNT',
        totalCount,
    } as const)

export const setPageSizeAC = (pageSize: number) =>
    ({
        type: 'SET-PAGE-SIZE',
        pageSize,
    } as const)

export const setUserRequestStatusAC = (id: number, status: RequestStatus) =>
    ({
        type: 'SET-USER-REQUEST-STATUS',
        id,
        status,
    } as const)

export const setUserRequestErrorAC = (id: number, error: ErrorType) =>
    ({
        type: 'SET-USER-REQUEST-ERROR',
        id,
        error,
    } as const)

export type UsersPageActionTypes =
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof setPageSizeAC>
    | ReturnType<typeof setFollowedAC>
    | ReturnType<typeof setUserRequestStatusAC>
    | ReturnType<typeof setUserRequestErrorAC>