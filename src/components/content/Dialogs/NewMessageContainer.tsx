import React from "react";
import {addMessageAC, changeNewMessageTextAC} from "../../../redux/reducers/dialogsPageActionCreators";
import {NewMessage} from "./NewMessage";
import {StoreContext} from "../../../StoreContext";

export const NewMessageContainer: React.FC = () =>
    <StoreContext.Consumer>
        {
            store =>
                <NewMessage
                    newMessageText={store.getState().dialogsPage.newMessageText}
                    changeMessage={text => store.dispatch(changeNewMessageTextAC(text))}
                    addMessage={() => store.dispatch(addMessageAC())}
                />
        }
    </StoreContext.Consumer>