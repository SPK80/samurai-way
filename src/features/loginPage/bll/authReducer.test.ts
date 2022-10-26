import {
    authReducer,
    AuthUserDataType,
    logOutAC,
    setAuthUserDataAC,
    setEmailAC,
    setLoginAC,
    toggleIsFetchingAC,
} from './authReducer'

let initialState: AuthUserDataType

beforeEach(() => {
    initialState = {
        userId: null,
        login: null,
        email: null,
        isFetching: false,
    }
})

test('user auth data must be seted', () => {
    const newState = authReducer(
        initialState,
        setAuthUserDataAC(2, 'test', 'test@test.com')
    )
    expect(newState).toEqual({
        userId: 2,
        login: 'test',
        email: 'test@test.com',
    })
})

test('loginPage must be seted', () => {
    const newState = authReducer(initialState, setLoginAC('test'))
    expect(newState.login).toBe('test')
})

test('email must be seted', () => {
    const newState = authReducer(initialState, setEmailAC('test@test.com'))
    expect(newState.email).toBe('test@test.com')
})

test('isFetching must be toggled', () => {
    const newState = authReducer(initialState, toggleIsFetchingAC(true))
    expect(newState.isFetching).toBe(true)
})

test('all fields must be null and rest isFetching is false', () => {
    initialState = {
        userId: 1,
        login: 'test',
        email: 'test@test.com',
        isFetching: true,
    }
    const newState = authReducer(initialState, logOutAC())
    expect(newState).toEqual({
        userId: null,
        login: null,
        email: null,
        isFetching: false,
    })
})
