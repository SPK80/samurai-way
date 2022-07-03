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
    type: "SETUSERS",
    usersList
} as const)