import { Dispatch } from 'redux'
import { AuthActionsType, setAvatarAC, setIsLoggedInAC, setUserDataAC } from './actions'
import { AppActionsType, setAppErrorAC, setAppStatusAC } from 'app'
import { authApi, LoginDataType } from '../dal/authApi'
import { RequestStatus } from 'common/bll/types'
import { profileApi } from 'features/profilePage/dal/profileApi'

export const authMe = async (dispatch: Dispatch<AuthActionsType | AppActionsType>) => {
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
    (data: LoginDataType) => async (dispatch: Dispatch<AuthActionsType | AppActionsType>) => {
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

export const logoutTC = () => (dispatch: Dispatch<AuthActionsType | AppActionsType>) => {
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

export const fetchAvatarTC =
    (userId: number) => async (dispatch: Dispatch<AuthActionsType | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
        try {
            const profile = await profileApi.getProfile(userId)
            dispatch(setAvatarAC(profile.photos.small ?? null))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }
