import React, { memo, useEffect } from 'react'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { useAppDispatch, useAppSelector } from '../../bll/store'
import { logoutTC } from 'features/authPage'
import defaultAvatar from 'common/assets/avatar.png'
import background from 'common/assets/background.jpg'
import { useNavigate } from 'react-router-dom'
import { fetchAvatarTC } from 'features/authPage/bll/thunks'

export const Header: React.FC = memo(() => {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    const userId = useAppSelector((state) => state.auth.userData?.id)
    const avatar = useAppSelector((state) => state.auth.avatar)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const logoutHandler = () => dispatch(logoutTC())
    const loginHandler = () => navigate('/authPage')

    useEffect(() => {
        // if (!isLoggedIn || userData?.id === userProfile?.userId) return
        if (userId) dispatch(fetchAvatarTC(userId))
    }, [userId])

    return (
        <AppBar
            component="div"
            position="static"
            elevation={0}
            sx={{ zIndex: 0, bgcolor: 'primary.dark' }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 2,
                    backgroundImage: `url("${background}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <Avatar alt="User Name" src={avatar || defaultAvatar} />
                {isLoggedIn ? (
                    <Button
                        variant="contained"
                        color="info"
                        onClick={logoutHandler}
                    >
                        Logout
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="info"
                        onClick={loginHandler}
                    >
                        Login
                    </Button>
                )}
            </Box>
        </AppBar>
    )
})
