import { usersPageReducer, UsersPageType } from './usersPageReducer'
import { setCurrentPageAC, setPageSizeAC, setTotalCountAC, setUsersAC } from './actions'
import { initialRequestingState } from 'common/bll/types'

let initialState: UsersPageType

beforeEach(() => {
    initialState = {
        currentPage: 1,
        totalCount: 0,
        pageSize: 10,
        userNameFilter: '',
        friendFilter: false,
        usersList: [
            {
                id: 1,
                name: 'Dmitry K.',
                followed: false,
                photos: {
                    small: '',
                    large: '',
                },
                status: 'I am looking for a Job right now..',
                request: initialRequestingState(),
            },
            {
                id: 2,
                name: 'Svetlana D.',
                photos: {
                    small: '',
                    large: '',
                },
                followed: false,
                status: 'I am so pretty',
                request: initialRequestingState(),
            },
            {
                id: 3,
                name: 'Sergei S.',
                photos: {
                    small: '',
                    large: '',
                },
                followed: true,
                status: 'I like football!',
                request: initialRequestingState(),
            },
        ],
    }
})

test('Must set 3 users', () => {
    const settingUsersList = initialState.usersList
    const action = setUsersAC(settingUsersList)
    const emptyState: UsersPageType = {
        usersList: [],
        userNameFilter: '',
        friendFilter: false,
        currentPage: 1,
        pageSize: 10,
        totalCount: 0,
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
