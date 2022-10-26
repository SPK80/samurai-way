import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import s from './AppContent.module.css'
import { AppStateType } from '../../bll/store'
import { authApi } from 'features/loginPage/dal/authApi'
import { DialogsPage } from 'features/dialogsPage'
import { ProfilePage } from 'features/profilePage'
import { UsersPage } from 'features/usersPage'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUserDataAC } from 'features/loginPage/bll/authReducer'
import { LoginPage } from 'features/loginPage'
import { Navbar } from '../Navbar/Navbar'
import { Header } from '../Header/Header'

export const AppContent: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
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
                    <Route path={'/loginPage'} element={<LoginPage />} />
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
