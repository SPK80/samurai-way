import React from "react"
import {combineReducers, legacy_createStore as createStore} from "redux";
import {Provider} from "react-redux";
import {DialogsPageActionTypes, dialogsPageReducer, DialogsPageType} from "../../bll/reducers/dialogsPageReducer";
import {action as storybookAction} from "@storybook/addon-actions";
import {UsersPageActionTypes, usersPageReducer, UsersPageType} from "../../bll/reducers/usersPageReducer";
import {authReducer} from "../../bll/reducers/authReducer";

const storyDialogsPageReducer = (state: DialogsPageType, action: DialogsPageActionTypes): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            storybookAction(action.type)(null)
            break
        case "CHANGE-NEW-MESSAGE-TEXT":
            storybookAction(action.type)(action.messageText)
            break
    }
    return dialogsPageReducer(state, action)
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

const storyUsersPageReducer = (
    state: UsersPageType = usersPageInitialState,
    action: UsersPageActionTypes
): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            storybookAction(action.type)(action.userId)
            break
        case "UNFOLLOW":
            storybookAction(action.type)(action.userId)
            break
    }
    return usersPageReducer(state, action)
}

const rootReducer = combineReducers({
    dialogsPage: storyDialogsPageReducer,
    usersPage: storyUsersPageReducer,
    auth: authReducer,
})
const storyBookStore = createStore(rootReducer)

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) =>
    <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>