import { useDispatch } from 'react-redux'
import React, { memo } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../bll/store'

export const Auth = memo(() => {
    const auth = useAppSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onclickLogOutHandler = () => {
        // authApi
        //     .logOut()
        //     .then((data) => {
        //         // console.log('logOutAC', data)
        //         navigate('login')
        //         dispatch(logOutAC())
        //     })
        //     .catch(console.log)
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
