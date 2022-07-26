import React from "react"
import {combineReducers, legacy_createStore as createStore} from "redux";
import {Provider} from "react-redux";
import {dialogsPageReducer} from "../../bll/reducers/dialogsPageReducer";
import {action as storybookAction} from "@storybook/addon-actions";
import {usersPageReducer, UsersPageType} from "../../bll/reducers/usersPageReducer";
import {authReducer, AuthUserDataType} from "../../bll/reducers/authReducer";


const getObjWithoutType = <AT extends { type: string }>(action: AT) =>
    Object.fromEntries(Object.entries(action).filter(([key]) => key !== 'type'))

const getObjWithoutType2 = <AT extends { type: string }>(action: AT) => {
    const obj = {...action}
    // @ts-ignore
    delete obj.type
    return obj
}


const storyActionsReducerWrap = <ST, AT extends { type: string }>(reducer: (state: ST, action: AT) => ST, initialState?: ST) =>
    (state: ST, action: AT) => {
        storybookAction(action.type)(getObjWithoutType(action))
        return reducer(initialState ? initialState : state, action)
    }

const authInitialState: AuthUserDataType = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
}

const usersPageInitialState: UsersPageType = {
    currentPage: 1,
    totalCount: 0,
    pageSize: 10,
    status: "idle",
    usersList: [
        {
            id: '1',
            name: 'Dmitry K.',
            followed: false,
            uniqueUrlName: "",
            photos: {
                small: "",
                large: "",
            },
            status: 'I am looking for a Job right now..',
        },
        {
            id: '2',
            name: 'Svetlana D.',
            uniqueUrlName: "",
            photos: {
                small: "",
                large: "",
            },
            followed: false,
            status: 'I am so pretty',
        },
        {
            id: '3',
            name: 'Sergei S.',
            uniqueUrlName: "",
            photos: {
                small: "",
                large: "",
            },
            followed: true,
            status: 'I like football!',
        },
    ]
}

const rootReducer = combineReducers({
    dialogsPage: storyActionsReducerWrap(dialogsPageReducer),
    usersPage: storyActionsReducerWrap(usersPageReducer, usersPageInitialState),
    auth: storyActionsReducerWrap(authReducer, authInitialState),
})
const storyBookStore = createStore(rootReducer)

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) =>
    <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>