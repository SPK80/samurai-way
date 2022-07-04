import {
    followUserAC,
    setCurrentPageAC,
    setPageSizeAC,
    setTotalCountAC,
    setUsersAC,
    unfollowUserAC
} from "./usersPageActionCreators";

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
    usersList: [] as Array<UserType>,
    pageSize: 5,
    currentPage: 5,
    totalCount: 0,
}

export type UsersPageType = typeof initialState

type UsersPageActionTypes =
    ReturnType<typeof followUserAC>
    | ReturnType<typeof unfollowUserAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof setPageSizeAC>

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
        case "SET-USERS":
            return {
                ...state,
                usersList: [...action.usersList]
            }
        case  "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case  "SET-TOTAL-COUNT":
            return {
                ...state,
                totalCount: action.totalCount
            }
        case  "SET-PAGE-SIZE":
            return {
                ...state,
                pageSize: action.pageSize
            }
        default:
            return state
    }
}