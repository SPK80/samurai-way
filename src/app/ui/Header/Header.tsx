import React, { memo } from 'react'
import { AppBar, Button, IconButton, Typography } from '@mui/material'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import { useAppDispatch, useAppSelector } from '../../bll/store'
import { useStyles } from './useStyles'
import { logoutTC } from 'features/authPage'

export const Header: React.FC = memo(() => {
    const classes = useStyles()
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    const userData = useAppSelector((state) => state.auth.userData)
    const dispatch = useAppDispatch()

    const logoutHandler = () => dispatch(logoutTC())

    return (
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
                        <Typography variant="h6">{userData?.login}</Typography>
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
        // <header className={s.Header}>
        //     <h1> {props.title} </h1>
        //     <Auth/>
        // </header>
    )
})
