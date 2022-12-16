import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector, useIsLoading } from '../../bll/store'
import { initializeAppTC } from '../../bll/thunks'
import { theme } from '../theme'
import { Header } from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'
import { AppRoutes } from './AppRoutes'
import CircularProgress from '@mui/material/CircularProgress'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import { ErrorSnackbar } from 'common/components/ErrorSnackbar'
import { TopLinearProgress } from 'common/components/TopLinearProgress'

export const AppContent: React.FC = () => {
    const dispatch = useAppDispatch()
    const isLoading = useIsLoading()
    const isInitialized = useAppSelector((state) => state.app.isInitialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized)
        return (
            <Box
                component={'div'}
                sx={{
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CircularProgress size={100} />
            </Box>
        )

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    minHeight: '100%',
                    flexDirection: 'column',
                    bgcolor: '#eaeff1',
                }}
            >
                <Header />
                {isLoading && <TopLinearProgress />}
                <ErrorSnackbar />
                <Container sx={{ m: 1, display: 'flex', flex: '1 1 auto' }}>
                    <Navbar />
                    <Box component="main" sx={{ flex: 1, mh: '100hv' }}>
                        <AppRoutes />
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}
