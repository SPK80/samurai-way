import {v1} from "uuid";
import {PostType, profilePageReducer, ProfilePageType, UserProfileType} from "./profilePageReducer";
import {addPostAC, changeNewPostTextAC} from "./profilePageActionCreators";

let initialState: ProfilePageType;

beforeEach(() => {
    initialState = {
        userProfile: {
            avatar: "https://avatars.githubusercontent.com/u/36849366?v=4",
            name: 'Pavel',
            age: 41,
            birthday: 'June 24',
            gender: 'male',
            website: 'https://github.com/SPK80',
            description: 'FrontEnd developer',
        } as UserProfileType,
        newPostText: '' as string,
        userPosts: [
            {id: v1(), message: 'Hello', likesCount: 3},
            {id: v1(), message: 'Yo Yo Yo!', likesCount: 5},
        ] as Array<PostType>
    }
    
})

test('new post must be added', () => {
    const action = addPostAC()
    const endState = profilePageReducer(initialState, action)
    
    expect(endState.userPosts.length).toBe(3)
    expect(endState.userPosts[2].message).toBe(initialState.newPostText)
})

test('newPostText must be changed', () => {
    const newPostText = 'changed text'
    
    const action = changeNewPostTextAC(newPostText)
    const endState = profilePageReducer(initialState, action)
    expect(endState.newPostText).toBe(newPostText)
})