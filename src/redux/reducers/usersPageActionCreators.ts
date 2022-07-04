import {UserType} from "./usersPageReducer";

export const followUserAC = (userId: string) => ({
    type: "FOLLOW",
    userId
} as const)

export const unfollowUserAC = (userId: string) => ({
    type: "UNFOLLOW",
    userId
} as const)

export const setUsersAC = (usersList: Array<UserType>) => ({
    type: "SET-USERS",
    usersList
} as const)

export const setCurrentPageAC = (currentPage: number) => ({
    type: "SET-CURRENT-PAGE",
    currentPage
} as const)

export const setTotalCountAC = (totalCount: number) => ({
    type: "SET-TOTAL-COUNT",
    totalCount
} as const)

export const setPageSizeAC = (pageSize: number) => ({
    type: "SET-PAGE-SIZE",
    pageSize
} as const)

