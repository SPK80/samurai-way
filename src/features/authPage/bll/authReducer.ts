import { AuthUserDataType } from '../dal/authApi'
import { AuthActionsType } from './actions'

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
