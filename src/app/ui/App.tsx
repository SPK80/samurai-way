import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import s from './App.module.css'
import { Header } from '../../common/components/Header/Header'
import { Navbar } from '../../common/components/Navbar/Navbar'
import { ProfilePage } from '../../features/profilePage/ui/ProfilePage'
import { DialogsPage } from '../../features/dialogsPage/ui/DialogsPage'
import { UsersPage } from '../../features/usersPage/ui/UsersPage'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../bll/redux-store'
import { authApi } from '../../common/api/authApi'
import { setAuthUserDataAC } from '../bll/reducers/authReducer'
import { Login } from '../../common/components/Login'

export const App: React.FC = () => {
    // console.log('App')

    const dispatch = useDispatch()
    useEffect(() => {
        // console.log('authApi.me')
        authApi
            .me()
            .then((data) =>
                dispatch(setAuthUserDataAC(data.id, data.login, data.email))
            )
            .catch(console.log)
    }, [])

    const userId = useSelector<AppStateType, number | null>(
        (state) => state.auth.userId
    )
    return (
        <div className={s.app}>
            <Header title={"Hello, samurai! Let's go!"} />
            <Navbar />
            <div className={s.wrapperContent}>
                <Routes>
                    <Route
                        path={'*'}
                        element={<Navigate to={`/profile/${userId ?? ''}`} />}
                    />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/profile'} element={<ProfilePage />} />
                    <Route
                        path={'/profile/:userId'}
                        element={<ProfilePage />}
                    />
                    <Route path={'/dialogs/*'} element={<DialogsPage />} />
                    <Route path={'/users'} element={<UsersPage />} />
                </Routes>
            </div>
        </div>
    )
}
