import React from "react";
import {Messages} from "./Messages";
import {StoreContext} from "../../../StoreContext";

export const MessagesContainer: React.FC = () =>
    <StoreContext.Consumer>
        {
            store => <Messages
                messages={store.getState().dialogsPage.messages}
            />
        }
    </StoreContext.Consumer>