import React from "react";
import {UserProfile} from "./UserProfile";
import {StoreContext} from "../../../StoreContext";

export const UserProfileContainer: React.FC = () =>
    <StoreContext.Consumer>
        {
            store => {
                const userProfile = store.getState().profilePage.userProfile
                return <UserProfile userProfile={userProfile}/>
            }
        }
    </StoreContext.Consumer>