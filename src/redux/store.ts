import {v1} from "uuid";
import {RootStateType} from "./stateTypes";
import {DialogsPageActionTypes} from "./dialogsPageActionTypes";
import {ProfilePageActionTypes} from "./profilePageActionTypes";
import {profilePageReducer} from "./reducers/profilePageReducer";
import {dialogsPageReducer} from "./reducers/dialogsPageReducer";

export interface IStore {
    dispatch: (action: ActionTypes) => void
    getState: () => RootStateType
    subscribe: (callBack: () => void) => void
}

type ActionTypes = DialogsPageActionTypes | ProfilePageActionTypes

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
    
    public dispatch(action: ActionTypes): void {
        const newProfilePageState = profilePageReducer(this.state.profilePage, action as ProfilePageActionTypes)
        const newDialogsPageState = dialogsPageReducer(this.state.dialogsPage, action as DialogsPageActionTypes)
        
        if (newProfilePageState !== this.state.profilePage || newDialogsPageState !== this.state.dialogsPage) {
            this.state = {
                ...this.state,
                profilePage: newProfilePageState,
                dialogsPage: newDialogsPageState,
            }
            this.onChange()
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