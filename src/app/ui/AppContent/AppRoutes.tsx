import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthPage } from 'features/authPage'
import { ProfilePage } from 'features/profilePage'
import { DialogsPage } from 'features/dialogsPage'
import { UsersPage } from 'features/usersPage'
import { useAppSelector } from '../../bll/store'

export const AppRoutes: React.FC = () => {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    return (
        <Routes>
            <Route
                path={'/'}
                element={
                    <Navigate to={isLoggedIn ? '/profile' : '/authPage'} />
                }
            />
            <Route path={'/authPage'} element={<AuthPage />} />
            <Route path={'/profile'} element={<ProfilePage />} />
            <Route path={'/profile/:userId'} element={<ProfilePage />} />
            <Route path={'/dialogs/*'} element={<DialogsPage />} />
            <Route path={'/users'} element={<UsersPage />} />
            <Route path={'/404'} element={<h1>404</h1>} />
            <Route path={'*'} element={<Navigate to={'/404'} />} />
        </Routes>
    )
}
