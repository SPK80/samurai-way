import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import s from './AppContent.module.css'
import { useAppDispatch, useAppSelector } from '../../bll/store'
import { initializeAppTC } from '../../bll/appReducer'
import { DialogsPage } from 'features/dialogsPage'
import { ProfilePage } from 'features/profilePage'
import { UsersPage } from 'features/usersPage'
import { AuthPage } from 'features/loginPage'
import { Navbar } from '../Navbar/Navbar'
import { Header } from '../Header/Header'

export const AppContent: React.FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    const userId = useAppSelector((state) => state.auth.userData?.id)

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
                    <Route path={'/loginPage'} element={<AuthPage />} />
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
