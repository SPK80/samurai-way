import React, { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app'
import { PagesCounter } from 'common/components/PagesCounter/PagesCounter'
import { RequestStatus } from 'common/bll/types'
import { UsersList } from './UsersList'
import { fetchUsersTC } from '../bll/thunks'
import { setCurrentPageAC, setPageSizeAC } from '../bll/actions'
import Paper from '@mui/material/Paper'

export const UsersPage: React.FC = memo(() => {
    const { totalCount, pageSize, currentPage } = useAppSelector((state) => state.usersPage)
    const { status } = useAppSelector((state) => state.app.request)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsersTC(currentPage, pageSize))
    }, [currentPage, pageSize])

    const onClickHandler = () => dispatch(setPageSizeAC(pageSize + 10))

    const onPageSizeSelectedHandler = (pageSize: number) => dispatch(setPageSizeAC(pageSize))

    const onCurrentPageChangedHandler = (newCurrentPage: number) =>
        dispatch(setCurrentPageAC(newCurrentPage))

    return (
        <Paper sx={{ minHeight: '100%', p: 1, overflow: 'hidden' }}>
            <h1>Users</h1>
            {status === RequestStatus.loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <PagesCounter
                        pageSize={pageSize}
                        pageSizeVariants={[5, 10, 100]}
                        currentPage={currentPage}
                        totalCount={totalCount}
                        onPageSizeSelected={onPageSizeSelectedHandler}
                        onCurrentPageChanged={onCurrentPageChangedHandler}
                    />
                    <UsersList />
                    <button onClick={onClickHandler}>Show more</button>
                </>
            )}
        </Paper>
    )
})
