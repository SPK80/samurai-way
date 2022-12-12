import React from 'react'
import { RedirectIfLoggedIn } from 'common/components/RedirectIfLoggedIn'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { LoginForm } from './LoginForm'

export const AuthPage = () => (
    <Paper sx={{ minHeight: '100%', p: 2, overflow: 'hidden' }}>
        <RedirectIfLoggedIn to={'/profile'} />
        <Typography variant={'h4'}>Login</Typography>
        <br />
        <LoginForm />

        <Typography variant={'subtitle2'} sx={{ mt: 2 }}>
            <div>For testing</div>
            <div>Email: free@samuraijs.com</div>
            <div>Password: free</div>
        </Typography>
    </Paper>
)
