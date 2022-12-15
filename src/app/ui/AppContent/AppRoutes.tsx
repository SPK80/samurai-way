import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthPage } from 'features/authPage'
import { ProfilePage } from 'features/profilePage'
import { DialogsPage } from 'features/dialogsPage'
import { UsersPage } from 'features/usersPage'
import { LoginRedirect } from './LoginRedirect'

export enum Path {
    Root = '/',
    Other = '*',
    AuthPage = '/authPage',
    Profile = '/profile',
    Dialogs = '/dialogs',
    Users = '/users',
    PageNotFound = '/404',
}

const routes = [
    { path: Path.AuthPage, element: <AuthPage /> },
    {
        path: Path.Profile,
        element: (
            <LoginRedirect>
                <ProfilePage />
            </LoginRedirect>
        ),
    },
    {
        path: Path.Profile + '/:userId',
        element: (
            <LoginRedirect>
                <ProfilePage />
            </LoginRedirect>
        ),
    },
    {
        path: Path.Dialogs + '/*',
        element: (
            <LoginRedirect>
                <DialogsPage />
            </LoginRedirect>
        ),
    },
    { path: Path.Users, element: <UsersPage /> },
    { path: Path.PageNotFound, element: <h1>404</h1> },
    { path: Path.Other, element: <Navigate to={Path.PageNotFound} /> },
]

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {routes.map((r) => (
                <Route {...r} />
            ))}
        </Routes>
    )
}
