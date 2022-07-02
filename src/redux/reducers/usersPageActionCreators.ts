export const followUserAC = (userId: string) => ({
    type: "FOLLOW",
    userId
} as const)

export const unfollowUserAC = (userId: string) => ({
    type: "UNFOLLOW",
    userId
} as const)