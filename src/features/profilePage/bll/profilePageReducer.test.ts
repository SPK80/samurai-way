import { v1 } from 'uuid'
import { profilePageReducer, ProfilePageStateType } from './profilePageReducer'
import { addPostAC } from './actions'

let initialState: ProfilePageStateType

beforeEach(() => {
    initialState = {
        userProfile: null,
        userPosts: [
            { id: v1(), text: 'Hello', likesCount: 3 },
            { id: v1(), text: 'Yo Yo Yo!', likesCount: 5 },
        ],
    } as ProfilePageStateType
})

test('new post must be added', () => {
    const newPostText = 'new post text'
    const action = addPostAC(newPostText)
    const endState = profilePageReducer(initialState, action)

    expect(endState.userPosts.length).toBe(3)
    expect(endState.userPosts[2].text).toBe(newPostText)
})
