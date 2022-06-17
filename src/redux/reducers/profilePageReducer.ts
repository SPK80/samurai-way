import {ProfilePageType} from "../stateTypes";
import {v1} from "uuid";
import {ProfilePageActionTypes} from "../profilePageActionTypes";

const addPost = (state: ProfilePageType): ProfilePageType => {
    const newPostText = state.newPostText
    return {
        ...state,
        newPostText: '',
        userPosts: [
            ...state.userPosts,
            {
                id: v1(),
                message: newPostText,
                likesCount: 0
            }
        ]
    }
}

const changeNewPostText = (state: ProfilePageType, newPostText: string): ProfilePageType => {
    return {
        ...state,
        newPostText
    }
}

export const profilePageReducer = (state: ProfilePageType, action: ProfilePageActionTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return addPost(state)
        
        case "CHANGE-NEW-POST-TEXT":
            return changeNewPostText(state, action.postText)
        
        default:
            return state
    }
    
}