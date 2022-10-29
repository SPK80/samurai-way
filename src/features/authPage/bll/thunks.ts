import { Dispatch } from 'redux'
import { AuthActionsType, setIsLoggedInAC, setUserDataAC } from './actions'
import {
    AppActionsType,
    RequestStatus,
    setAppErrorAC,
    setAppStatusAC,
} from 'app'
import { authApi, LoginDataType } from '../dal/authApi'

export const authMe = async (
    dispatch: Dispatch<AuthActionsType | AppActionsType>
) => {
    try {
        dispatch(setUserDataAC(await authApi.me()))
        dispatch(setIsLoggedInAC(true))
    } catch (err: any) {
        dispatch(setAppErrorAC(err))
    } finally {
        dispatch(setAppStatusAC(RequestStatus.idle))
    }
}

export const loginTC =
    (data: LoginDataType) =>
    async (dispatch: Dispatch<AuthActionsType | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
        try {
            await authApi.login(data)
            await authMe(dispatch)
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }

export const logoutTC =
    () => (dispatch: Dispatch<AuthActionsType | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
        authApi
            .logout()
            .then(() => {
                dispatch(setIsLoggedInAC(false))
                dispatch(setUserDataAC(null))
            })
            .catch((res) => dispatch(setAppErrorAC(res)))
            .finally(() => dispatch(setAppStatusAC(RequestStatus.idle)))
    }
