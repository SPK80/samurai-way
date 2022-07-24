import {v1} from "uuid";
import {authReducer, setAuthUserDataAC, UserDataType} from "./authReducer";

let initialState: UserDataType;

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