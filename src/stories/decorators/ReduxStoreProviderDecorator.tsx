import React from "react"
import {combineReducers, legacy_createStore as createStore} from "redux";
import {Provider} from "react-redux";
import {DialogsPageActionTypes, dialogsPageReducer, DialogsPageType} from "../../redux/reducers/dialogsPageReducer";
import {action as storybookAction} from "@storybook/addon-actions";


export const storyDialogsPageReducer = (state: DialogsPageType, action: DialogsPageActionTypes): DialogsPageType => {
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

const rootReducer = combineReducers({dialogsPage: storyDialogsPageReducer})
const storyBookStore = createStore(rootReducer)

export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) =>
    <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>