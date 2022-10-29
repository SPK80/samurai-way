import { Dispatch } from 'redux'
import { AuthActionsType, setIsLoggedInAC, setUserDataAC } from './actions'
import {
    AppActionsType,
    RequestStatusType,
    setAppErrorAC,
    setAppStatusAC,
} from 'app/bll/appReducer'
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
        dispatch(setAppStatusAC(RequestStatusType.idle))
    }
}

export const loginTC =
    (data: LoginDataType) =>
    async (dispatch: Dispatch<AuthActionsType | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatusType.loading))
        try {
            await authApi.login(data)
            await authMe(dispatch)
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatusType.idle))
        }
    }

export const logoutTC =
    () => (dispatch: Dispatch<AuthActionsType | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatusType.loading))
        authApi
            .logout()
            .then(() => {
                dispatch(setIsLoggedInAC(false))
                dispatch(setUserDataAC(null))
            })
            .catch((res) => dispatch(setAppErrorAC(res)))
            .finally(() => dispatch(setAppStatusAC(RequestStatusType.idle)))
    }
