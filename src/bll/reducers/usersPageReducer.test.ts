import {usersPageReducer, UsersPageType} from "./usersPageReducer";
import {
    followUserAC,
    setCurrentPageAC,
    setPageSizeAC,
    setTotalCountAC,
    setUsersAC,
    unfollowUserAC
} from "./usersPageActionCreators";

let initialState: UsersPageType;

beforeEach(() => {
    initialState = {
        currentPage: 1,
        totalCount: 0,
        pageSize: 10,
        status: "idle",
        usersList: [
            {
                id: 1,
                name: 'Dmitry K.',
                followed: false,
                photos: {
                    small: "",
                    large: "",
                },
                status: 'I am looking for a Job right now..',
            },
            {
                id: 2,
                name: 'Svetlana D.',
                photos: {
                    small: "",
                    large: "",
                },
                followed: false,
                status: 'I am so pretty',
            },
            {
                id: 3,
                name: 'Sergei S.',
                photos: {
                    small: "",
                    large: "",
                },
                followed: true,
                status: 'I like football!',
            },
        ]
    }
})

test('Must follow 2nd user', () => {
    const action = followUserAC(2)
    const endState = usersPageReducer(initialState, action)
    console.log(endState)
    expect(endState.usersList[1].followed).toBeTruthy()
})

test('Must unfollow 3nd user', () => {
    const action = unfollowUserAC(3)
    const endState = usersPageReducer(initialState, action)
    console.log(endState)
    expect(endState.usersList[2].followed).toBeFalsy()
})

test('Must set 3 users', () => {
    const settingUsersList = initialState.usersList
    const action = setUsersAC(settingUsersList)
    const emptyState: UsersPageType = {
        usersList: [],
        currentPage: 1,
        pageSize: 10,
        totalCount: 0,
        status: "idle"
    }
    const endState = usersPageReducer(emptyState, action)
    console.log(endState)
    expect(endState.usersList.length).toBe(3)
})

test('Must set current page #2', () => {
    const action = setCurrentPageAC(2)
    const endState = usersPageReducer(initialState, action)
    console.log(endState)
    expect(endState.currentPage).toBe(2)
})

test('Must set total count to 100', () => {
    const action = setTotalCountAC(100)
    const endState = usersPageReducer(initialState, action)
    console.log(endState)
    expect(endState.totalCount).toBe(100)
})

test('Must set page size to 4', () => {
    const action = setPageSizeAC(4)
    const endState = usersPageReducer(initialState, action)
    console.log(endState)
    expect(endState.pageSize).toBe(4)
})