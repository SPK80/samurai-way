import React, { ChangeEvent, useState } from 'react'
import s from './authPage.module.css'
import { useAppDispatch, useAppSelector } from 'app/bll/store'
import { RequestStatusType } from 'app/bll/appReducer'
import { loginTC } from '../bll/authReducer'

export const AuthPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const appStatus = useAppSelector((state) => state.app.status)
    const dispatch = useAppDispatch()
    // const navigate = useNavigate()

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.currentTarget.value)

    const onSubmitHandler = () => {
        dispatch(
            loginTC({ email, password, rememberMe: false, captcha: false })
        )
        setPassword('')
        setEmail('')

        // dispatch(toggleIsFetchingAC(true))
        // authApi
        //     .login({ email, password, rememberMe: false })
        //     .then((data) => {
        //         navigate('profile')
        //         authApi
        //             .me()
        //             .then((data) =>
        //                 dispatch(
        //                     setAuthUserDataAC(data.id, data.login, data.email)
        //                 )
        //             )
        //             .catch(console.log)
        //     })
        //     .catch(console.log)
        //     .finally(() => dispatch(toggleIsFetchingAC(false)))
    }

    return (
        <div className={s.login}>
            <h2>Login</h2>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <span>email</span>
                    <input
                        type={'email'}
                        value={email}
                        onChange={onChangeEmailHandler}
                    />
                </div>
                <div>
                    <span>password</span>
                    <input
                        type={'password'}
                        value={password}
                        onChange={onChangePasswordHandler}
                    />
                </div>
                <button
                    type={'submit'}
                    disabled={appStatus === RequestStatusType.loading}
                >
                    {appStatus === RequestStatusType.loading
                        ? 'fetching...'
                        : 'Sign In'}
                </button>
            </form>
        </div>
    )
}
