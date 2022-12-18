import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector, useIsLoading } from 'app/bll/store'
import { useDebounce } from 'usehooks-ts'
import { setUserNameFilterAC } from '../bll/actions'
import { FocusingTextField } from 'common/components/FocusingTextField'

export const UserNameFilter: React.FC = () => {
    const isLoading = useIsLoading()
    const dispatch = useAppDispatch()
    const { userNameFilter } = useAppSelector((state) => state.usersPage)
    const [value, setValue] = useState(userNameFilter)
    const debouncedUserNameFilter = useDebounce(value, 500)

    useEffect(() => {
        dispatch(setUserNameFilterAC(debouncedUserNameFilter))
    }, [debouncedUserNameFilter])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return (
        <FocusingTextField
            focus
            id="username-filter"
            label="User Name"
            disabled={isLoading}
            value={value}
            onChange={onChangeHandler}
        />
    )
}
