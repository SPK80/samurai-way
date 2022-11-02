import { AuthUserDataType } from '../dal/authApi'
import { AuthActionsType } from './actions'

export type AuthStateType = typeof initialState

const initialState = {
    isLoggedIn: false,
    userData: null as AuthUserDataType | null,
    avatar: null as string | null,
}

export const authReducer = (
    state: AuthStateType = initialState,
    action: AuthActionsType
): AuthStateType => {
    switch (action.type) {
        case 'AUTH/SET-IS-LOGGED-IN':
            return { ...state, isLoggedIn: action.isLoggedIn }
        case 'AUTH/SET-USER-DATA':
            return { ...state, userData: action.userData }
        case 'AUTH/SET-AVATAR':
            return { ...state, avatar: action.avatar }
        default:
            return state
    }
}
