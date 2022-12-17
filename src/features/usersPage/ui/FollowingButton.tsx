import React from 'react'
import { ButtonProps } from '@mui/material'
import { LoadingButton } from 'common/components/LoadingButton'

export const FollowingButton: React.FC<ButtonProps & { isFollowed: boolean; isLoading: boolean }> =
    ({ isFollowed, isLoading, ...restProps }) => (
        <LoadingButton
            spinner={'pending...'}
            sx={{ pt: 0, pb: 0 }}
            variant={'text'}
            {...restProps}
            isLoading={isLoading}
        >
            {isFollowed ? 'Unfollow' : 'Follow'}
        </LoadingButton>
    )
