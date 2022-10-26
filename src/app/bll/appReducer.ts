import { Dispatch } from 'redux'
import { authApi } from 'features/loginPage/dal/authApi'

/*============TYPES===================================================================================================*/

export enum RequestStatusType {
    idle,
    loading,
}

export type AppStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export type AppActionsType =
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppInitializedAC>

/*==========REDUCER===================================================================================================*/

const initialState: AppStateType = {
    status: RequestStatusType.idle,
    error: null,
    isInitialized: false,
}

export const appReducer = (
    state: AppStateType = initialState,
    action: AppActionsType
): AppStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return { ...state, status: action.status }
        case 'APP/SET-ERROR':
            return { ...state, error: action.error }
        case 'APP/SET-IS-INITIALIZED':
            return { ...state, isInitialized: action.isInitialized }
        default:
            return state
    }
}

/*============ActionCreators==========================================================================================*/

export const setAppErrorAC = (error: string | null) =>
    ({ type: 'APP/SET-ERROR', error } as const)
export const setAppStatusAC = (status: RequestStatusType) =>
    ({ type: 'APP/SET-STATUS', status } as const)
export const setAppInitializedAC = (isInitialized: boolean) =>
    ({
        type: 'APP/SET-IS-INITIALIZED',
        isInitialized,
    } as const)

/*==============TunkCreators==========================================================================================*/

export const initializeAppTC = () => (dispatch: Dispatch) => {
    // authApi
    //     .me()
    //     .then(() => dispatch(setIsLoggedInAC(true)))
    //     .catch((res) => dispatch(setAppErrorAC(res)))
    //     .finally(() => dispatch(setAppInitializedAC(true)))
}
