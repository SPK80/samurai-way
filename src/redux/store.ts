import {v1} from "uuid";
import {StoreType} from "./types";
import {ActionTypes} from "./actionTypes";

export const store: StoreType = {
    _state: {
        profilePage: {
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
        },
        
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Dimych'},
                {id: v1(), name: 'Andrey'},
                {id: v1(), name: 'Sveta'},
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How is your?'},
                {id: v1(), message: 'Yo'},
            ]
        },
        
        sidebar: {}
    },
    
    _onChange: () => {
    },
    
    getState: () => store._state,
    
    subscribe: (callBack: () => void) => {
        store._onChange = callBack
    },
    
    dispatch: (action: ActionTypes) => {
        
        switch (action.type) {
            case "ADD-POST": {
                store._addPost()
                store._onChange()
                return
            }
            case "CHANGE-NEW-POST-TEXT": {
                store._changeNewPost(action.postText)
                store._onChange()
                return
            }
        }
    },
    
    _addPost: () => {
        const newPostText = store._state.profilePage.newPostText
        store._state = {
            ...store._state,
            profilePage: {
                ...store._state.profilePage,
                newPostText: '',
                userPosts: [
                    ...store._state.profilePage.userPosts,
                    {
                        id: v1(),
                        message: newPostText,
                        likesCount: 0
                    }
                ]
            }
        }
    },
    
    _changeNewPost: (newPostText: string) => {
        store._state = {
            ...store._state,
            profilePage: {
                ...store._state.profilePage,
                newPostText
            }
        }
    },
    
}