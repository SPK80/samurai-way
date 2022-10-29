import { Dispatch } from 'redux'
import { authMe } from 'features/authPage'
import { AppActionsType, RequestStatus } from './actions'

/*============TYPES===================================================================================================*/
export type AppStateType = {
    status: RequestStatus
    error: string | null
    isInitialized: boolean
}
/*==========REDUCER===================================================================================================*/

const initialState: AppStateType = {
    status: RequestStatus.idle,
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
