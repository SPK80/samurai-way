import {StoreType} from "../../../redux/redux-store";
import React from "react";
import {Messages} from "./Messages";

type MessagesContainerPropsType = {
    store: StoreType
}
export const MessagesContainer: React.FC<MessagesContainerPropsType> = ({store}) =>
    <Messages
        messages={store.getState().dialogsPage.messages}
    />