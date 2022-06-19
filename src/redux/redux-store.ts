import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./reducers/dialogsPageReducer";
import {profilePageReducer} from "./reducers/profilePageReducer";

const reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
})

export type RootStateType = ReturnType<typeof reducers>

export const store = createStore(reducers)

export type StoreType = typeof store

export type DispatchType = typeof store.dispatch
