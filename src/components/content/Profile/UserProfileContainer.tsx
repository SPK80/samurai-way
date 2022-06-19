import React from "react";
import {StoreType} from "../../../redux/redux-store";
import {UserProfile} from "./UserProfile";

type UserProfileContainerPropsType = {
    store: StoreType
}
export const UserProfileContainer: React.FC<UserProfileContainerPropsType> =
    ({store}) => {
        const userProfile = store.getState().profilePage.userProfile
        return <UserProfile userProfile={userProfile}/>
    }