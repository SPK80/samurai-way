import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from 'app/bll/store'
import { AuthUserDataType, logOutAC } from 'features/loginPage/bll/authReducer'
import React, { memo } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { authApi } from 'features/loginPage/dal/authApi'

export const Auth = memo(() => {
    const userData = useSelector<AppStateType, AuthUserDataType>(
        (state) => state.auth
    )
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onclickLogOutHandler = () => {
        authApi
            .logOut()
            .then((data) => {
                // console.log('logOutAC', data)
                navigate('login')
                dispatch(logOutAC())
            })
            .catch(console.log)
    }

    return (
        <div>
            {userData.userId ? (
                <>
                    <div>{userData.login}</div>
                    <div>{userData.email}</div>
                    <button onClick={onclickLogOutHandler}>LogOut</button>
                </>
            ) : (
                <NavLink to={'/loginPage'}>Login</NavLink>
            )}
        </div>
    )
})
