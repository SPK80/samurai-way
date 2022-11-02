import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../bll/store'
import { initializeAppTC } from '../../bll/thunks'
import { theme } from '../theme'
import { Header } from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'
import { AppRoutes } from './AppRoutes'
import { RequestStatus } from 'common/types'
import { CircularProgress, LinearProgress } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles'

export const AppContent: React.FC = () => {
    const dispatch = useAppDispatch()
    const requestStatus = useAppSelector((state) => state.app.request.status)
    const isInitialized = useAppSelector((state) => state.app.isInitialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) return <CircularProgress />
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    minHeight: '100%',
                    flexDirection: 'column',
                    bgcolor: '#eaeff1',
                }}
            >
                <CssBaseline />
                <Header />
                {requestStatus === RequestStatus.loading && <LinearProgress />}

                <Box sx={{ display: 'flex', flex: '1 1 auto' }}>
                    <Navbar />
                    <Box
                        component="main"
                        sx={{ flex: 1, py: 6, px: 4, mh: '100hv' }}
                    >
                        <AppRoutes />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
