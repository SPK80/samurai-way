import {v1} from "uuid";
import {authReducer, setAuthUserDataAC, AuthUserDataType, setLoginAC, setEmailAC} from "./authReducer";

let initialState: AuthUserDataType;

beforeEach(() => {
    initialState = {
        userId: null,
        login: null,
        email: null,
    }
})

test('user auth data must be seted', () => {
    const newState = authReducer(initialState, setAuthUserDataAC(2, 'test', 'test@test.com'))
    expect(newState).toEqual({
        userId: 2,
        login: 'test',
        email: 'test@test.com',
    })
})

test('login must be seted', () => {
    const newState = authReducer(initialState, setLoginAC('test'))
    expect(newState.login).toBe('test')
})

test('email must be seted', () => {
    const newState = authReducer(initialState, setEmailAC('test@test.com'))
    expect(newState.email).toBe('test@test.com',)
})