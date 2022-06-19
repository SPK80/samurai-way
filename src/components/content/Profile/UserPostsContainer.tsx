import React from "react";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profilePageActionTypes";
import {UserPosts} from "./UserPosts";
import {StoreContext} from "../../../StoreContext";

export const UserPostsContainer: React.FC = () =>
    <StoreContext.Consumer>
        {
            store => {
                const profilePage = store.getState().profilePage
                return <UserPosts
                    posts={profilePage.userPosts}
                    newPostText={profilePage.newPostText}
                    addPost={() => store.dispatch(addPostAC())}
                    changeNewPostText={text => store.dispatch(changeNewPostTextAC(text))}
                />
            }
            
        }
    </StoreContext.Consumer>