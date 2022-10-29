import { Dispatch } from 'redux'
import {
    AppActionsType,
    RequestStatus,
    setAppErrorAC,
    setAppStatusAC,
} from 'app'
import { usersApi } from '../dal/usersApi'
import {
    setTotalCountAC,
    setUsersAC,
    UsersPageActionTypes,
} from './usersPageActionCreators'

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
