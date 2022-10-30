import { UsersPageActionTypes } from './usersPageActionCreators'

export type UserType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

const initialState = {
    usersList: [] as Array<UserType>,
    pageSize: 5,
    currentPage: 1,
    totalCount: 0,
}

export type UsersPageType = typeof initialState

export const usersPageReducer = (
    state: UsersPageType = initialState,
    action: UsersPageActionTypes
): UsersPageType => {
    switch (action.type) {
        case 'SET-FOLLOW':
            return {
                ...state,
                usersList: state.usersList.map((u) =>
                    u.id === action.userId
                        ? { ...u, followed: action.followed }
                        : u
                ),
            }
        case 'SET-USERS':
            return {
                ...state,
                usersList: [...action.usersList],
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case 'SET-TOTAL-COUNT':
            return {
                ...state,
                totalCount: action.totalCount,
            }
        case 'SET-PAGE-SIZE':
            return {
                ...state,
                pageSize: action.pageSize,
            }
        default:
            return state
    }
}
