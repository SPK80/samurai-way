import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from 'redux'
import {
    DialogsPageActionTypes,
    dialogsPageReducer,
} from 'features/dialogsPage/bll/dialogsPageReducer'
import {
    ProfilePageActionTypes,
    profilePageReducer,
} from 'features/profilePage/bll/profilePageReducer'
import {
    UsersPageActionTypes,
    usersPageReducer,
} from 'features/usersPage/bll/usersPageReducer'
import {
    AuthActionsType,
    authReducer,
} from 'features/loginPage/bll/authReducer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppActionsType, appReducer } from './appReducer'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'

const rootReducer = combineReducers({
    app: appReducer,
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AllActionsType =
    | AppActionsType
    | DialogsPageActionTypes
    | ProfilePageActionTypes
    | UsersPageActionTypes
    | AuthActionsType

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppDispatch = ThunkDispatch<
    AppRootStateType,
    unknown,
    AllActionsType
>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    AllActionsType
>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
    useSelector
