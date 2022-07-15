import React from "react"
import {combineReducers, legacy_createStore as createStore} from "redux";
import {Provider} from "react-redux";
import {DialogsPageActionTypes, dialogsPageReducer, DialogsPageType} from "../../redux/reducers/dialogsPageReducer";
import {action as storybookAction} from "@storybook/addon-actions";
import {UsersPageActionTypes, usersPageReducer, UsersPageType} from "../../redux/reducers/usersPageReducer";
import userAvatar from "../../assets/avatar.png"

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

const usersPageInitialState = {
    currentPage: 1,
    totalCount: 0,
    pageSize: 10,
    usersList: [
        {
            id: '1',
            name: 'Dmitry K.',
            avatarUrl: userAvatar,
            following: false,
            status: 'I am looking for a Job right now..',
            location: {
                country: 'Belarus',
                city: 'Minsk'
            }
        },
        {
            id: '2',
            name: 'Svetlana D.',
            avatarUrl: userAvatar,
            following: false,
            status: 'I am so pretty',
            location: {
                country: 'Belarus',
                city: 'Minsk'
            }
        },
        {
            id: '3',
            name: 'Sergei S.',
            avatarUrl: userAvatar,
            following: true,
            status: 'I like football!',
            location: {
                country: 'Ukraine',
                city: 'Kiev'
            }
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
    usersPage: storyUsersPageReducer
})
const storyBookStore = createStore(rootReducer)

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) =>
    <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>