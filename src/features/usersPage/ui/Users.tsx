import React, { memo, useEffect } from 'react'
import { setCurrentPageAC, setPageSizeAC } from '../bll/usersPageActionCreators'
import { Progress } from 'common/components/Progress/Progress'
import { PagesCounter } from 'common/components/PagesCounter/PagesCounter'
import { UsersList } from './UsersList'
import { useAppDispatch, useAppSelector } from 'app/bll/store'
import { fetchUsersTC } from '../bll/thunks'
import { RequestStatusType } from 'app/bll/appReducer'

export const Users: React.FC = memo(() => {
    const { totalCount, pageSize, currentPage, usersList } = useAppSelector(
        (state) => state.usersPage
    )
    const { status, error } = useAppSelector((state) => state.app)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsersTC(currentPage, pageSize))
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
            {status === RequestStatusType.loading && <Progress />}
            {error && <h3 color={'red'}>{error}</h3>}
            {status === RequestStatusType.idle && (
                <UsersList usersList={usersList} />
            )}
        </>
    )
})
