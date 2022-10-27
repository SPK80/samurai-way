import React, {ChangeEvent, useState} from 'react'
import s from './login.module.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {authApi} from '../dal/authApi'
import {useAppSelector} from 'app/bll/store'
import {RequestStatusType} from 'app/bll/appReducer'

export const LoginPage = () => {
  const email = useAppSelector((state) => state.auth.userData?.email) ?? ''
  const appStatus = useAppSelector((state) => state.app.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // dispatch(setEmailAC(e.currentTarget.value))
  }
  
  const [password, setPassword] = useState('')
  const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value)
  
  const onClickSignInHandler = () => {
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
        onClick={onClickSignInHandler}
        disabled={appStatus === RequestStatusType.loading}
      >
        {appStatus === RequestStatusType.loading
          ? 'fetching...'
          : 'Sign In'}
      </button>
    </div>
  )
}
