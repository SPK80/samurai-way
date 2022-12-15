import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthPage } from 'features/authPage'
import { ProfilePage } from 'features/profilePage'
import { DialogsPage } from 'features/dialogsPage'
import { UsersPage } from 'features/usersPage'
import { PageNotFound } from 'features/pageNotFound'
import { LoginRedirect } from './LoginRedirect'

export enum Path {
    Root = '/',
    Other = '*',
    AuthPage = '/authPage',
    Profile = '/profile',
    Dialogs = '/dialogs',
    Users = '/users',
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
    { path: Path.Other, element: <PageNotFound /> },
]

export const AppRoutes: React.FC = () => (
    <Routes>
        {routes.map((route, index) => (
            <Route key={index} {...route} />
        ))}
    </Routes>
)
