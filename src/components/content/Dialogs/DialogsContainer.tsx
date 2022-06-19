import React from "react";
import {StoreType} from "../../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}
export const DialogsContainer: React.FC<DialogsContainerPropsType> = ({store}) =>
    <Dialogs
        dialogs={store.getState().dialogsPage.dialogs}
    />