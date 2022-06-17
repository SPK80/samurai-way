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

const initialState: ProfilePageType = {
    userProfile: {
        avatar: "https://avatars.githubusercontent.com/u/36849366?v=4",
        name: 'Pavel',
        age: 41,
        birthday: 'June 24',
        gender: 'male',
        website: 'https://github.com/SPK80',
        description: 'FrontEnd developer',
    },
    newPostText: '',
    userPosts: [
        {id: v1(), message: 'Hello', likesCount: 3},
        {id: v1(), message: 'Yo Yo Yo!', likesCount: 5},
    ]
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ProfilePageActionTypes): ProfilePageType => {
    
    switch (action.type) {
        case "ADD-POST":
            return addPost(state)
        
        case "CHANGE-NEW-POST-TEXT":
            return changeNewPostText(state, action.postText)
        
        default:
            return state
    }
    
}