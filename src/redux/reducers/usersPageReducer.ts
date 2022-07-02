import {followUserAC, unfollowUserAC} from "./usersPageActionCreators";

export type UserType = {
    id: string
    avatar: string
    name: string
    status: string
    location: {
        country: string
        city: string
    }
    following: boolean
}

const initialState = {
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
            following: false,
            status: 'I like football!',
            location: {
                country: 'Ukraine',
                city: 'Kiev'
            }
        },
    ] as Array<UserType>
}

export type UsersPageType = typeof initialState

type UsersPageActionTypes = ReturnType<typeof followUserAC> | ReturnType<typeof unfollowUserAC>

export const usersPageReducer = (state: UsersPageType = initialState, action: UsersPageActionTypes): UsersPageType => {
    // debugger
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                usersList: state.usersList.map(u => u.id === action.userId ? {...u, following: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                usersList: state.usersList.map(u => u.id === action.userId ? {...u, following: false} : u)
            }
        default:
            return state
    }
}