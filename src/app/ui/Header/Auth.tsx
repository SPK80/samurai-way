import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../bll/store'
import { logoutTC } from 'features/loginPage/bll/authReducer'

export const Auth = memo(() => {
    const auth = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()

    const onclickLogOutHandler = () => {
        dispatch(logoutTC())
    }

    return (
        <div>
            {auth.isLoggedIn ? (
                <>
                    <div>{auth.userData?.login}</div>
                    <div>{auth.userData?.email}</div>
                    <button onClick={onclickLogOutHandler}>LogOut</button>
                </>
            ) : (
                <NavLink to={'/loginPage'}>Login</NavLink>
            )}
        </div>
    )
})
