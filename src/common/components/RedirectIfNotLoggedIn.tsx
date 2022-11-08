import React from 'react'
import { useAppSelector } from 'app'
import { Navigate } from 'react-router-dom'

export const RedirectIfNotLoggedIn: React.FC<{ to: string }> = ({ to }) => {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    if (!isLoggedIn) return <Navigate to={to} />
    return <></>
}
