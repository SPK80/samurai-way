import { Dispatch } from 'redux'
import {
    AppActionsType,
    RequestStatus,
    setAppErrorAC,
    setAppStatusAC,
} from 'app'
import { usersApi } from '../dal/usersApi'
import {
    setFollowedAC,
    setTotalCountAC,
    setUsersAC,
    UsersPageActionTypes,
} from './usersPageActionCreators'
import { followApi } from '../dal/followApi'

export const fetchUsersTC =
    (page: number, count: number) =>
    async (dispatch: Dispatch<UsersPageActionTypes | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
        try {
            const users = await usersApi.getUsers(page, count)
            dispatch(setUsersAC(users.items))
            dispatch(setTotalCountAC(users.totalCount))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }

export const getFollowedTC =
    (userId: number) =>
    async (dispatch: Dispatch<UsersPageActionTypes | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
        try {
            const isFollowed = await followApi.getFollowed(userId)
            dispatch(setFollowedAC(userId, isFollowed))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }

export const setFollowTC =
    (userId: number, followed: boolean) =>
    async (dispatch: Dispatch<UsersPageActionTypes | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
        try {
            await followApi.follow(userId)
            dispatch(setFollowedAC(userId, followed))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }
