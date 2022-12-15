import { useAppSelector } from 'app/bll/store'
import React, { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { Path } from './AppRoutes'

export const LoginRedirect: React.FC<PropsWithChildren> = ({ children }) => {
    const isLogin = useAppSelector((state) => state.auth.isLoggedIn)
    if (!isLogin) return <Navigate to={Path.AuthPage} />
    return <>{children}</>
}
