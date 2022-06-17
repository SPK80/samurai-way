import {v1} from "uuid";
import {RootStateType} from "./stateTypes";
import {ActionTypes} from "./actions";

export interface IStore {
    dispatch: (action: ActionTypes) => void
    getState: () => RootStateType
    subscribe: (callBack: () => void) => void
}

class Store implements IStore {
    private state: RootStateType = {
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
            newMessageText: '',
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
    }
    
    private onChange: () => void = () => {
    }
    
    private changeNewPost(newPostText: string) {
        this.state = {
            ...this.state,
            profilePage: {
                ...this.state.profilePage,
                newPostText
            }
        }
    }
    
    private changeNewMessageText(newMessageText: string) {
        this.state = {
            ...this.state,
            dialogsPage: {
                ...this.state.dialogsPage,
                newMessageText
            }
        }
    }
    
    private addPost() {
        const newPostText = this.state.profilePage.newPostText
        this.state = {
            ...this.state,
            profilePage: {
                ...this.state.profilePage,
                newPostText: '',
                userPosts: [
                    ...this.state.profilePage.userPosts,
                    {
                        id: v1(),
                        message: newPostText,
                        likesCount: 0
                    }
                ]
            }
        }
    }
    
    private addMessage() {
        const newMessageText = this.state.dialogsPage.newMessageText
        this.state = {
            ...this.state,
            dialogsPage: {
                ...this.state.dialogsPage,
                newMessageText: '',
                messages: [
                    ...this.state.dialogsPage.messages,
                    {
                        id: v1(),
                        message: newMessageText
                    }
                ]
            }
        }
    }
    
    public dispatch(action: ActionTypes): void {
        switch (action.type) {
            case "ADD-POST": {
                this.addPost()
                this.onChange()
                return
            }
            case "ADD-MESSAGE": {
                this.addMessage()
                this.onChange()
                return
            }
            case "CHANGE-NEW-POST-TEXT": {
                this.changeNewPost(action.postText)
                this.onChange()
                return
            }
            case  "CHANGE-NEW-MESSAGE-TEXT": {
                this.changeNewMessageText(action.messageText)
                this.onChange()
                return
            }
        }
    }
    
    public getState(): RootStateType {
        return this.state
    }
    
    public subscribe(callBack: () => void): void {
        this.onChange = callBack
    }
}

export const store = new Store()