import React, { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app'
import { PagesCounter } from 'common/components/PagesCounter/PagesCounter'
import { RequestStatus } from 'common/types'
import { Progress } from 'common/components/Progress/Progress'
import { UsersList } from './UsersList'
import { fetchUsersTC } from '../bll/thunks'
import { setCurrentPageAC, setPageSizeAC } from '../bll/usersPageActionCreators'

export const UsersPage: React.FC = memo(() => {
    const { totalCount, pageSize, currentPage } = useAppSelector(
        (state) => state.usersPage
    )
    const { status, error } = useAppSelector((state) => state.app.request)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsersTC(currentPage, pageSize))
    }, [currentPage, pageSize])

    const onClickHandler = () => dispatch(setPageSizeAC(pageSize + 10))

    const onPageSizeSelectedHandler = (pageSize: number) =>
        dispatch(setPageSizeAC(pageSize))

    const onCurrentPageChangedHandler = (newCurrentPage: number) =>
        dispatch(setCurrentPageAC(newCurrentPage))

    return (
        <div>
            <h1>Users</h1>
            <PagesCounter
                pageSize={pageSize}
                pageSizeVariants={[5, 10, 100]}
                currentPage={currentPage}
                totalCount={totalCount}
                onPageSizeSelected={onPageSizeSelectedHandler}
                onCurrentPageChanged={onCurrentPageChangedHandler}
            />
            {status === RequestStatus.loading && <Progress />}
            {error && <h3 color={'red'}>{error}</h3>}
            {status === RequestStatus.idle && <UsersList />}
            <button onClick={onClickHandler}>Show more</button>
        </div>
    )
})
