import React from 'react'
import { combineReducers, legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { dialogsPageReducer } from 'features/dialogsPage/bll/dialogsPageReducer'
import { action as storybookAction } from '@storybook/addon-actions'
import {
    usersPageReducer,
    UsersPageType,
} from 'features/usersPage/bll/usersPageReducer'
import { authReducer, AuthStateType } from 'features/authPage/bll/authReducer'
import { initialRequestingState } from 'common/types'

const getObjWithoutType = <AT extends { type: string }>(action: AT) =>
    Object.fromEntries(Object.entries(action).filter(([key]) => key !== 'type'))

const getObjWithoutType2 = <AT extends { type: string }>(action: AT) => {
    const obj = { ...action }
    // @ts-ignore
    delete obj.type
    return obj
}

const storyActionsReducerWrap =
    <ST, AT extends { type: string }>(
        reducer: (state: ST, action: AT) => ST,
        initialState?: ST
    ) =>
    (state: ST, action: AT) => {
        storybookAction(action.type)(getObjWithoutType(action))
        return reducer(initialState ? initialState : state, action)
    }

const authInitialState: AuthStateType = {
    isLoggedIn: false,
    userData: null,
}

const usersPageInitialState: UsersPageType = {
    currentPage: 1,
    totalCount: 0,
    pageSize: 10,
    usersList: [
        {
            id: 1,
            name: 'Dmitry K.',
            followed: false,
            photos: {
                small: '',
                large: '',
            },
            status: 'I am looking for a Job right now..',
            request: initialRequestingState(),
        },
        {
            id: 2,
            name: 'Svetlana D.',
            photos: {
                small: '',
                large: '',
            },
            followed: false,
            status: 'I am so pretty',
            request: initialRequestingState(),
        },
        {
            id: 3,
            name: 'Sergei S.',
            photos: {
                small: '',
                large: '',
            },
            followed: true,
            status: 'I like football!',
            request: initialRequestingState(),
        },
    ],
}

const rootReducer = combineReducers({
    dialogsPage: storyActionsReducerWrap(dialogsPageReducer),
    usersPage: storyActionsReducerWrap(usersPageReducer, usersPageInitialState),
    auth: storyActionsReducerWrap(authReducer, authInitialState),
})
const storyBookStore = createStore(rootReducer)

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => (
    <Provider store={storyBookStore}>{storyFn()}</Provider>
)
