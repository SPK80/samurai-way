import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/redux-store";
import {setAuthUserDataAC, setEmailAC} from "../bll/reducers/authReducer";
import {authApi} from "../api/authApi";
import s from './login.module.css'

export const Login = () => {
    const email = useSelector<AppStateType, string | null>(state => state.auth.email) ?? ''
    const dispatch = useDispatch()

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) =>
        dispatch(setEmailAC(e.currentTarget.value))

    const [password, setPassword] = useState('')
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)

    const onClickSignInHandler = () => {
        authApi.login(email, password)
            .then(({data, messages, resultCode}) => {
                if (resultCode === 0)
                    authApi.me().then(({data, messages, resultCode}) => {
                        dispatch(setAuthUserDataAC(data.id, data.login, data.email))
                    })
                else console.log(messages)
            })
    }

    return (
        <div className={s.login}>
            <h2>Login</h2>
            <div>
                <span>email</span>
                <input
                    type={"email"}
                    value={email}
                    onChange={onChangeEmailHandler}
                />
            </div>
            <div>
                <span>password</span>
                <input
                    type={"password"}
                    value={password}
                    onChange={onChangePasswordHandler}
                />
            </div>
            <button
                onClick={onClickSignInHandler}
            >Sign In
            </button>
        </div>
    )
}