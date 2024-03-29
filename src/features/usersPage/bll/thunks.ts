import { Dispatch } from 'redux'
import { AppActionsType, setAppErrorAC, setAppStatusAC } from 'app'
import { usersApi, UsersRequestType } from '../dal/usersApi'
import {
    setFollowedAC,
    setTotalCountAC,
    setUserRequestErrorAC,
    setUserRequestStatusAC,
    setUsersAC,
    UsersPageActionTypes,
} from './actions'
import { followApi } from '../dal/followApi'
import { RequestStatus } from 'common/bll/types'

export const fetchUsersTC =
    (params: UsersRequestType) =>
    async (dispatch: Dispatch<UsersPageActionTypes | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
        try {
            const users = await usersApi.getUsers(params)
            dispatch(setUsersAC(users.items))
            dispatch(setTotalCountAC(users.totalCount))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }

export const getFollowedTC =
    (userId: number) => async (dispatch: Dispatch<UsersPageActionTypes | AppActionsType>) => {
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
    (userId: number, follow: boolean) =>
    async (dispatch: Dispatch<UsersPageActionTypes | AppActionsType>) => {
        dispatch(setUserRequestStatusAC(userId, RequestStatus.loading))
        try {
            if (follow) await followApi.follow(userId)
            else await followApi.unfollow(userId)
            dispatch(setFollowedAC(userId, follow))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
            dispatch(setUserRequestErrorAC(userId, err))
        } finally {
            dispatch(setUserRequestStatusAC(userId, RequestStatus.idle))
        }
    }
