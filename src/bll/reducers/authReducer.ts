export type AuthUserDataType = {
    userId: number | null
    login: string | null
    email: string | null
}

const initialState: AuthUserDataType = {
    userId: null,
    login: null,
    email: null,
}

export const setAuthUserDataAC = (userId: number, login: string, email: string) => ({
    type: 'SET-AUTH-USER-DATA',
    userId,
    login,
    email
} as const)

export const setLoginAC = (login: string) => ({
    type: 'SET-LOGIN',
    login
} as const)

export const setEmailAC = (email: string) => ({
    type: 'SET-EMAIL',
    email
} as const)

type AuthActionsType =
    ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setLoginAC>
    | ReturnType<typeof setEmailAC>

export const authReducer = (state = initialState, action: AuthActionsType): AuthUserDataType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {
                ...state,
                email: action.email,
                login: action.login,
                userId: action.userId,
            }
        case "SET-LOGIN":
            return {...state, login: action.login}
        case "SET-EMAIL":
            return {...state, email: action.email}
        default:
            return state
    }
}