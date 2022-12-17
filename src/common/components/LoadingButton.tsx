import React from 'react'
import { ButtonProps } from '@mui/material'
import Button from '@mui/material/Button'

export const LoadingButton: React.FC<
    ButtonProps & { isLoading?: boolean; spinner?: React.ReactNode }
> = ({ isLoading, spinner, ...restProps }) => (
    <Button
        disabled={isLoading}
        {...restProps}
        children={isLoading && spinner ? spinner : restProps.children}
    />
)
