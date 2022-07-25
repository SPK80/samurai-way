export type AuthUserDataType = {
    userId: number | null
    login: string | null
    email: string | null
    isFetching: boolean
}

const initialState: AuthUserDataType = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
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

export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: 'TOGGLE-IS-FETCHING',
    isFetching
} as const)

export const logOutAC = () => ({
    type: 'LOGOUT'
} as const)


type AuthActionsType =
    ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setLoginAC>
    | ReturnType<typeof setEmailAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof logOutAC>

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
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "LOGOUT":
            return {...initialState}
        default:
            return state
    }
}