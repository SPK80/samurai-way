import {StoreType} from "../../../redux/redux-store";
import React from "react";
import {addMessageAC, changeNewMessageTextAC} from "../../../redux/dialogsPageActionTypes";
import {NewMessage} from "./NewMessage";

type NewMessageContainerPropsType = {
    store: StoreType
}
export const NewMessageContainer: React.FC<NewMessageContainerPropsType> =
    ({store}) =>
        <NewMessage
            newMessageText={store.getState().dialogsPage.newMessageText}
            changeMessage={text => store.dispatch(changeNewMessageTextAC(text))}
            addMessage={() => store.dispatch(addMessageAC())}
        />