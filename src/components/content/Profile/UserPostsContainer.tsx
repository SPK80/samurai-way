import {StoreType} from "../../../redux/redux-store";
import React from "react";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profilePageActionTypes";
import {UserPosts} from "./UserPosts";

type UserPostsContainerPropsType = {
    store: StoreType
}

export const UserPostsContainer: React.FC<UserPostsContainerPropsType> =
    ({store}) => {
        const profilePage = store.getState().profilePage
        return <UserPosts
            posts={profilePage.userPosts}
            newPostText={profilePage.newPostText}
            addPost={() => store.dispatch(addPostAC())}
            changeNewPostText={text => store.dispatch(changeNewPostTextAC(text))}
        />
    }