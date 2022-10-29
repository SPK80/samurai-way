import { AuthUserDataType } from '../dal/authApi'

export type AuthActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setUserDataAC>

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
