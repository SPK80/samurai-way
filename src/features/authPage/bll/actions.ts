import { AuthUserDataType } from '../dal/authApi'

export type AuthActionsType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setUserDataAC>
    | ReturnType<typeof setAvatarAC>

export const setIsLoggedInAC = (isLoggedIn: boolean) =>
    ({
        type: 'AUTH/SET-IS-LOGGED-IN',
        isLoggedIn,
    } as const)

export const setUserDataAC = (userData: AuthUserDataType | null) =>
    ({
        type: 'AUTH/SET-USER-DATA',
        userData,
    } as const)

export const setAvatarAC = (avatar: string | null) =>
    ({
        type: 'AUTH/SET-AVATAR',
        avatar,
    } as const)
