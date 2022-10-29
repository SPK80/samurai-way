import React, { ChangeEvent, FormEvent, useState } from 'react'
import s from './authPage.module.css'
import { useAppDispatch, useAppSelector } from 'app/bll/store'
import { RequestStatusType } from 'app/bll/appReducer'
import { loginTC } from '../bll/thunks'

export const AuthPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const appStatus = useAppSelector((state) => state.app.status)
    const dispatch = useAppDispatch()

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.currentTarget.value)

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        dispatch(loginTC({ email, password, rememberMe: false }))
        setPassword('')
        setEmail('')
        e.preventDefault()
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
