import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StatusType, UsersPageType, UserType } from '../bll/usersPageReducer'
import { AppStateType } from '../../../app/bll/redux-store'
import {
    setCurrentPageAC,
    setPageSizeAC,
    setStatusAC,
    setTotalCountAC,
    setUsersAC,
} from '../bll/usersPageActionCreators'
import { usersApi } from '../../../common/api/usersApi'
import { Progress } from '../../../common/components/Progress'
import { PagesCounter } from '../../../common/components/PagesCounter'
import { UsersList } from './UsersList'

export const Users: React.FC = memo(() => {
    const { totalCount, pageSize, currentPage, usersList, status } =
        useSelector<AppStateType, UsersPageType>((state) => state.usersPage)

    const dispatch = useDispatch()
    const setUsers = (usersList: Array<UserType>) =>
        dispatch(setUsersAC(usersList))
    const setTotalCount = (totalCount: number) =>
        dispatch(setTotalCountAC(totalCount))
    const setStatus = (newStatus: StatusType) =>
        dispatch(setStatusAC(newStatus))

    const getUsers = () => {
        setStatus('progress')
        usersApi
            .getUsers(currentPage, pageSize)
            .then((res) => {
                setTotalCount(res.totalCount ?? 0)
                setUsers(res.items)
                setStatus('idle')
            })
            .catch(() => {
                setStatus('error')
            })
    }

    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, pageSize])

    const onPageSizeSelectedHandler = (pageSize: number) =>
        dispatch(setPageSizeAC(pageSize))

    const onCurrentPageChangedHandler = (newCurrentPage: number) =>
        dispatch(setCurrentPageAC(newCurrentPage))

    return (
        <>
            <PagesCounter
                pageSize={pageSize}
                pageSizeVariants={[5, 10, 100]}
                currentPage={currentPage}
                totalCount={totalCount}
                onPageSizeSelected={onPageSizeSelectedHandler}
                onCurrentPageChanged={onCurrentPageChangedHandler}
            />
            {status === 'progress' && <Progress />}
            {status === 'error' && <h3 color={'red'}>Error</h3>}
            {status === 'idle' && <UsersList usersList={usersList} />}
        </>
    )
})
