import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthPage } from 'features/authPage'
import { ProfilePage } from 'features/profilePage'
import { DialogsPage } from 'features/dialogsPage'
import { UsersPage } from 'features/usersPage'
import { useAppSelector } from '../../bll/store'
import { LoginRedirect } from './LoginRedirect'

export enum Path {
    Root = '/',
    Other = '/*',
    AuthPage = 'authPage',
    Profile = 'profile',
    Dialogs = 'dialogs',
    Users = 'users',
    PageNotFound = '404',
}

export const AppRoutes: React.FC = () => {
    // const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    return (
        <Routes>
            {/*<Route*/}
            {/*    path={Path.Root}*/}
            {/*    element={<Navigate to={isLoggedIn ? Path.Profile : Path.AuthPage} />}*/}
            {/*/>*/}
            <Route path={Path.AuthPage} element={<AuthPage />} />

            <Route
                path={Path.Profile}
                element={
                    <LoginRedirect>
                        <ProfilePage />
                    </LoginRedirect>
                }
            />

            {/*<Route*/}
            {/*    path={Path.Profile + '/:userId'}*/}
            {/*    element={*/}
            {/*        <LoginRedirect>*/}
            {/*            <ProfilePage />*/}
            {/*        </LoginRedirect>*/}
            {/*    }*/}
            {/*/>*/}

            {/*<Route*/}
            {/*    path={Path.Dialogs + '/*'}*/}
            {/*    element={*/}
            {/*        <LoginRedirect>*/}
            {/*            <DialogsPage />*/}
            {/*        </LoginRedirect>*/}
            {/*    }*/}
            {/*/>*/}

            {/*<Route path={Path.Users} element={<UsersPage />} />*/}
            <Route path={Path.PageNotFound} element={<h1>404</h1>} />
            <Route path={'*'} element={<Navigate to={Path.PageNotFound} />} />
        </Routes>
    )
}
