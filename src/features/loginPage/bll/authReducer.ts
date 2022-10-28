import { authApi, AuthUserDataType, LoginDataType } from '../dal/authApi'
import { Dispatch } from 'redux'
import {
    AppActionsType,
    RequestStatusType,
    setAppErrorAC,
    setAppStatusAC,
} from 'app/bll/appReducer'

export type AuthActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setUserDataAC>

export type AuthStateType = typeof initialState

const initialState = {
    isLoggedIn: false,
    userData: null as AuthUserDataType | null,
}

export const authReducer = (
    state: AuthStateType = initialState,
    action: AuthActionsType
): AuthStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return { ...state, isLoggedIn: action.isLoggedIn }
        case 'login/SET-USER-DATA':
            return { ...state, userData: action.userData }
        default:
            return state
    }
}

// actions
export const setIsLoggedInAC = (isLoggedIn: boolean) =>
    ({
        type: 'login/SET-IS-LOGGED-IN',
        isLoggedIn,
    } as const)

export const setUserDataAC = (userData: AuthUserDataType | null) =>
    ({
        type: 'login/SET-USER-DATA',
        userData,
    } as const)

// thunks

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
