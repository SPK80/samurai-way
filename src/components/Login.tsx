import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/redux-store";
import {setAuthUserDataAC, setEmailAC, toggleIsFetchingAC} from "../bll/reducers/authReducer";
import {authApi} from "../api/authApi";
import s from './login.module.css'
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const email = useSelector<AppStateType, string | null>(state => state.auth.email) ?? ''
    const isFetching = useSelector<AppStateType, boolean>(state => state.auth.isFetching)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) =>
        dispatch(setEmailAC(e.currentTarget.value))
    
    const [password, setPassword] = useState('')
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    
    const onClickSignInHandler = () => {
        dispatch(toggleIsFetchingAC(true))
        authApi.login(email, password)
            .then(data => {
                // console.log('login.then', data)
                navigate('profile')
                authApi.me()
                    .then(data => dispatch(setAuthUserDataAC(data.id, data.login, data.email)))
                    .catch(console.log)
            })
            .catch(console.log)
            .finally(() => dispatch(toggleIsFetchingAC(false)))
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
                disabled={isFetching}
            >
                {isFetching ? 'fetching...' : 'Sign In'}
            </button>
        </div>
    )
}