import React from "react";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../../StoreContext";

export const DialogsContainer: React.FC = () =>
    <StoreContext.Consumer>
        {
            store =>
                <Dialogs
                    dialogs={store.getState().dialogsPage.dialogs}
                />
        }
    </StoreContext.Consumer>