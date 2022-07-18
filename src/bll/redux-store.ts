import {combineReducers, legacy_createStore} from "redux";
import {dialogsPageReducer} from "./reducers/dialogsPageReducer";
import {profilePageReducer} from "./reducers/profilePageReducer";
import {usersPageReducer} from "./reducers/usersPageReducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer
})

export const store = legacy_createStore(rootReducer)

export type StoreType = typeof store
export type AppStateType = ReturnType<typeof store.getState>