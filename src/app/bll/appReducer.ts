import { AppActionsType } from './actions'
import { RequestingStateType, RequestStatus } from 'common/types'

/*============TYPES===================================================================================================*/
export type AppStateType = RequestingStateType & {
    isInitialized: boolean
}
/*==========REDUCER===================================================================================================*/

const initialState: AppStateType = {
    request: {
        status: RequestStatus.idle,
        error: null,
    },
    isInitialized: false,
}

export const appReducer = (
    state: AppStateType = initialState,
    action: AppActionsType
): AppStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {
                ...state,
                request: { ...state.request, status: action.status },
            }
        case 'APP/SET-ERROR':
            return {
                ...state,
                request: { ...state.request, error: action.error },
            }
        case 'APP/SET-IS-INITIALIZED':
            return { ...state, isInitialized: action.isInitialized }
        default:
            return state
    }
}
