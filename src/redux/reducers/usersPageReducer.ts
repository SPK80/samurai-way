import {followUserAC, setUsersAC, unfollowUserAC} from "./usersPageActionCreators";
import avatar from '../../avatar.png'

export type UserType = {
    id: string
    avatarUrl: string
    name: string
    status: string
    location: {
        country: string
        city: string
    }
    following: boolean
}

const initialState = {
    usersList: [] as Array<UserType>
}

export type UsersPageType = typeof initialState

type UsersPageActionTypes =
    ReturnType<typeof followUserAC>
    | ReturnType<typeof unfollowUserAC>
    | ReturnType<typeof setUsersAC>

export const usersPageReducer = (state: UsersPageType = initialState, action: UsersPageActionTypes): UsersPageType => {
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
        case "SETUSERS":
            return {
                ...state,
                usersList: [...state.usersList, ...action.usersList]
            }
        default:
            return state
    }
}