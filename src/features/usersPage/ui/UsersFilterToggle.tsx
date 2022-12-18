import React from 'react'
import { useAppDispatch, useAppSelector } from 'app'
import { setFriendFilterAC } from '../bll/actions'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useIsLoading } from 'app/bll/store'

export const UsersFilterToggle: React.FC = () => {
    const { friendFilter } = useAppSelector((state) => state.usersPage)
    const dispatch = useAppDispatch()
    const isLoading = useIsLoading()

    const onChangeHandler = (_: any, value: string) =>
        dispatch(setFriendFilterAC(value === 'friends'))

    return (
        <RadioGroup
            row
            name="filter by friend"
            value={friendFilter ? 'friends' : 'all'}
            onChange={onChangeHandler}
        >
            <FormControlLabel disabled={isLoading} value="all" control={<Radio />} label="All" />
            <FormControlLabel
                disabled={isLoading}
                value="friends"
                control={<Radio />}
                label="Friends"
            />
        </RadioGroup>
    )
}
