import React, { memo } from 'react'
import { useAppDispatch, useAppSelector } from 'app'
import { useIsLoading } from 'app/bll/store'
import { AppPagination } from 'common/components/AppPagination'
import { setCurrentPageAC, setPageSizeAC } from '../bll/actions'
import { UsersList } from './UsersList'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { UsersFilterToggle } from './UsersFilterToggle'
import { UserNameFilter } from './UserNameFilter'
import { FlexBox } from 'common/components/FlexBox'

export const UsersPage: React.FC = memo(() => {
    const { pageSize, currentPage, totalCount } = useAppSelector((state) => state.usersPage)
    const dispatch = useAppDispatch()
    const isLoading = useIsLoading()

    const onClickHandler = () => dispatch(setPageSizeAC(pageSize + 10))
    const onChangePageSizeHandler = (pageSize: number) => dispatch(setPageSizeAC(pageSize))
    const onChangePageHandler = (newPage: number) => dispatch(setCurrentPageAC(newPage))

    return (
        <Paper sx={{ minHeight: '100%', p: 1, overflow: 'hidden' }}>
            <FlexBox margin={2}>
                <UsersFilterToggle />
                <UserNameFilter />
            </FlexBox>
            <AppPagination
                page={currentPage}
                totalCount={totalCount}
                pageSize={pageSize}
                onChangePage={onChangePageHandler}
                onChangePageSize={onChangePageSizeHandler}
            />
            <UsersList />
            <Button disabled={isLoading} variant={'outlined'} onClick={onClickHandler}>
                Show more
            </Button>
        </Paper>
    )
})
