export type UserDataType = {
    userId: number | null
    login: string | null
    email: string | null
}

const initialState: UserDataType = {
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

type AuthActionsType = ReturnType<typeof setAuthUserDataAC>;

export const authReducer = (state = initialState, action: AuthActionsType): UserDataType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {
                ...state,
                email: action.email,
                login: action.login,
                userId: action.userId,
            }
        default:
            return state
    }
}