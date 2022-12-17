import React from 'react'
import Pagination from '@mui/material/Pagination'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { useIsLoading } from 'app/bll/store'

type PropsType = {
    pageSize: number
    page: number
    totalCount: number
    onChangePageSize: (newPageCount: number) => void
    onChangePage: (newPageCount: number) => void
    itemsCaption?: string
}

export const AppPagination: React.FC<PropsType> = ({
    totalCount,
    pageSize,
    page,
    onChangePage,
    onChangePageSize,
    itemsCaption,
}) => {
    const isLoading = useIsLoading()

    const onChangePageSizeHandler = (e: SelectChangeEvent<number>) => {
        const newPageSize = +e.target.value
        const newPage = Math.ceil((page * pageSize - pageSize + 1) / newPageSize)
        onChangePageSize(newPageSize)
        onChangePage(newPage)
    }

    const onChangePageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        onChangePage(page)
    }

    return (
        <Box
            sx={{
                mt: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            <Pagination
                color={'primary'}
                count={Math.floor(totalCount / pageSize) + 1}
                variant="outlined"
                shape="rounded"
                page={page}
                defaultPage={1}
                onChange={onChangePageHandler}
                disabled={isLoading}
            />
            <Box sx={{ ml: 2 }}>
                <span>Show</span>
                <Select
                    sx={{ ml: 1, mr: 1 }}
                    variant={'standard'}
                    value={pageSize}
                    onChange={onChangePageSizeHandler}
                    disabled={isLoading}
                >
                    {[5, 10, 25].map((v) => (
                        <MenuItem key={v} value={v}>
                            {v}
                        </MenuItem>
                    ))}
                </Select>
                <span>{itemsCaption ?? 'Items'} per Page</span>
            </Box>
        </Box>
    )
}
