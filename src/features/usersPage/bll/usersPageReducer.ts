import { UsersPageActionTypes } from './actions'
import { initialRequestingState, RequestingStateType } from 'common/bll/types'

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
    usersList: [] as Array<UserType & RequestingStateType>,
    pageSize: 5,
    currentPage: 1,
    totalCount: 0,
    friendFilter: false,
    userNameFilter: '',
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
                    u.id === action.userId ? { ...u, followed: action.followed } : u
                ),
            }
        case 'SET-USERS':
            return {
                ...state,
                usersList: action.usersList.map((u) => ({
                    ...u,
                    request: initialRequestingState(),
                })),
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
        case 'SET-USER-REQUEST-STATUS':
            return {
                ...state,
                usersList: state.usersList.map((u) =>
                    u.id === action.id
                        ? {
                              ...u,
                              request: { ...u.request, status: action.status },
                          }
                        : u
                ),
            }

        case 'SET-USER-REQUEST-ERROR':
            return {
                ...state,
                usersList: state.usersList.map((u) =>
                    u.id === action.id
                        ? {
                              ...u,
                              request: { ...u.request, error: action.error },
                          }
                        : u
                ),
            }

        case 'SET-USER-NAME-FILTER':
            return { ...state, userNameFilter: action.userNameFilter }

        case 'SET-FRIEND-FILTER':
            return { ...state, friendFilter: action.friendFilter }

        default:
            return state
    }
}
