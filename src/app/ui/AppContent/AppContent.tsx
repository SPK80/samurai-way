import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import s from './AppContent.module.css'
import Container from '@mui/material/Container'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import {
    AppBar,
    Button,
    CircularProgress,
    IconButton,
    LinearProgress,
    Typography,
} from '@mui/material'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useAppDispatch, useAppSelector } from '../../bll/store'
import { DialogsPage } from 'features/dialogsPage'
import { ProfilePage } from 'features/profilePage'
import { UsersPage } from 'features/usersPage'
import { AuthPage, logoutTC } from 'features/authPage'
import { initializeAppTC } from '../../bll/thunks'
import { RequestStatus } from 'common/types'
import { ErrorSnackbar } from 'common/components/ErrorSnackbar'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        user: {
            width: 160,
            display: 'flex',
            justifyContent: 'space-between',
        },
    })
)

export const AppContent: React.FC = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector((state) => state.app.isInitialized)
    const requestStatus = useAppSelector((state) => state.app.request.status)
    const userId = useAppSelector((state) => state.auth.userData?.id)
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    const userData = useAppSelector((state) => state.auth.userData)

    const classes = useStyles()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    const logoutHandler = () => dispatch(logoutTC())
    if (!isInitialized) return <CircularProgress />

    return (
        <div className={s.app}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Hello, samurai! Let's go!
                        </Typography>
                        {isLoggedIn && (
                            <div className={classes.user}>
                                <Typography variant="h6">
                                    {userData?.login}
                                </Typography>
                                <Button
                                    onClick={logoutHandler}
                                    color="inherit"
                                    variant={'outlined'}
                                >
                                    LogOut
                                </Button>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
                {requestStatus === RequestStatus.loading && <LinearProgress />}
            </div>

            <ErrorSnackbar />
            <Container fixed style={{ margin: 0 }}>
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
        </div>
    )
}
