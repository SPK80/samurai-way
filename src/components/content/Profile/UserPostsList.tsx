import React, {memo} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/redux-store";
import {PostType} from "../../../bll/reducers/profilePageReducer";
import {UserPost} from "./UserPost";

export const UserPostsList: React.FC = memo(() => {
    console.log('UserPostsList')
    const postsState = useSelector<AppStateType, Array<PostType>>(state => state.profilePage.userPosts)
    return (
        <div>
            {postsState.map(userPost =>
                <UserPost key={userPost.id} {...userPost}/>)}
        </div>
    )
})