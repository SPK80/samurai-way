import {usersPageReducer, UsersPageType} from "./usersPageReducer";
import {followUserAC, unfollowUserAC} from "./usersPageActionCreators";

let initialState: UsersPageType;

beforeEach(() => {
    initialState = {
        usersList: [
            {
                id: '1',
                name: 'Dmitry K.',
                avatar: "",
                following: false,
                status: 'I am looking for a Job right now..',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                }
            },
            {
                id: '2',
                name: 'Svetlana D.',
                avatar: "",
                following: false,
                status: 'I am so pretty',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                }
            },
            {
                id: '3',
                name: 'Sergei S.',
                avatar: "",
                following: true,
                status: 'I like football!',
                location: {
                    country: 'Ukraine',
                    city: 'Kiev'
                }
            },
        ]
    }
})

test('Must follow 2nd user', () => {
    const action = followUserAC('2')
    const endState = usersPageReducer(initialState, action)
    console.log(endState)
    expect(endState.usersList[1].following).toBeTruthy()
})

test('Must unfollow 3nd user', () => {
    const action = unfollowUserAC('3')
    const endState = usersPageReducer(initialState, action)
    console.log(endState)
    expect(endState.usersList[2].following).toBeFalsy()
})