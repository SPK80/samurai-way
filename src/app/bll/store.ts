import { combineReducers, legacy_createStore } from 'redux'
import { dialogsPageReducer } from 'features/dialogsPage/bll/dialogsPageReducer'
import { profilePageReducer } from 'features/profilePage/bll/profilePageReducer'
import { usersPageReducer } from 'features/usersPage/bll/usersPageReducer'
import { authReducer } from 'features/loginPage/bll/authReducer'

const rootReducer = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})

export const store = legacy_createStore(rootReducer)
export type AppStateType = ReturnType<typeof store.getState>