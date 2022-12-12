import React from 'react'
import { useAppDispatch, useIsLoading } from 'app/bll/store'
import { useFormik } from 'formik'
import { loginTC } from '../bll/thunks'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

type ErrorsType = {
    email?: string
    password?: string
}
type ValuesType = {
    email: string
    password: string
}
export const LoginForm: React.FC = () => {
    const isLoading = useIsLoading()
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        } as ValuesType,

        validate: (values) => {
            const errors: ErrorsType = {}
            if (!values.password) {
                errors.password = 'Password required'
            } else if (values.password.length <= 3) {
                errors.password = 'Password must be more than 3 characters'
            }
            if (!values.email) {
                errors.email = 'Email required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },

        onSubmit: ({ email, password }) => {
            dispatch(loginTC({ email, password, rememberMe: false }))
            formik.resetForm()
        },
    })

    return (
        <FormControl component="form" onSubmit={formik.handleSubmit} size="medium">
            <TextField
                type={'email'}
                variant="standard"
                name="email"
                label="Email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={!!formik.errors.email}
                helperText={formik.errors.email}
            />
            <br />
            <TextField
                type={'password'}
                variant="standard"
                name="password"
                label="Password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={!!formik.errors.password}
                helperText={formik.errors.password}
            />
            <br />
            <Button
                variant={'contained'}
                type="submit"
                disabled={!formik.isValid || !formik.dirty || isLoading}
            >
                Login
            </Button>
        </FormControl>
    )
}
