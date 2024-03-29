import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { appReducer } from './appReducer'
import { authReducer, AuthActionsType } from 'features/authPage'
import { profilePageReducer, ProfilePageActionTypes } from 'features/profilePage'
import { DialogsPageActionTypes, dialogsPageReducer } from 'features/dialogsPage'
import { UsersPageActionTypes, usersPageReducer } from 'features/usersPage'
import { AppActionsType } from './actions'
import { RequestStatus } from 'common/bll/types'

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

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AllActionsType>

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    AllActionsType
>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export const useIsLoading = () =>
    useAppSelector((state) => state.app.request.status) === RequestStatus.loading
