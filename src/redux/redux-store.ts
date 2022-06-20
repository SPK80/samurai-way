import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./reducers/dialogsPageReducer";
import {profilePageReducer} from "./reducers/profilePageReducer";

const reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
})

export const store = createStore(reducers)

export type StoreType = typeof store
export type AppStateType = ReturnType<typeof store.getState>