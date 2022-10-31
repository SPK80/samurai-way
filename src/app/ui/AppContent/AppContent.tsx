import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Container from '@mui/material/Container'
import { CircularProgress, LinearProgress } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../bll/store'
import { DialogsPage } from 'features/dialogsPage'
import { ProfilePage } from 'features/profilePage'
import { UsersPage } from 'features/usersPage'
import { AuthPage } from 'features/authPage'
import { initializeAppTC } from '../../bll/thunks'
import { RequestStatus } from 'common/types'
import { ErrorSnackbar } from 'common/components/ErrorSnackbar'
import { Header } from '../Header/Header'
import Box from '@mui/material/Box'

export const AppContent: React.FC = () => {
    const dispatch = useAppDispatch()
    const requestStatus = useAppSelector((state) => state.app.request.status)
    const userId = useAppSelector((state) => state.auth.userData?.id)
    const isInitialized = useAppSelector((state) => state.app.isInitialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) return <CircularProgress />
    return (
        <Box sx={{ padding: '10px', flexGrow: 1 }}>
            <ErrorSnackbar />
            <Container fixed style={{ margin: 0 }}>
                <Header />
                {requestStatus === RequestStatus.loading && <LinearProgress />}
                <Routes>
                    <Route
                        path={'*'}
                        element={<Navigate to={`/profile/${userId ?? ''}`} />}
                    />
                    <Route path={'/authPage'} element={<AuthPage />} />
                    <Route path={'/profile'} element={<ProfilePage />} />
                    <Route
                        path={'/profile/:userId'}
                        element={<ProfilePage />}
                    />
                    <Route path={'/dialogs/*'} element={<DialogsPage />} />
                    <Route path={'/users'} element={<UsersPage />} />
                </Routes>
            </Container>
        </Box>
    )
}
