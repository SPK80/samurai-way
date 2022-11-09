import React, { memo, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import { profileApi, UserProfileWithPhotosType } from 'features/profilePage/dal/profileApi'
import { setAppErrorAC, setAppStatusAC } from 'app'
import { RequestStatus } from '../types'

export const UserAvatar: React.FC<{ userProfile: UserProfileWithPhotosType }> = memo(
    ({ userProfile }) => {
        return (
            <Avatar
                alt={userProfile?.fullName}
                src={userProfile?.photos.small || userProfile?.photos.small}
            />
        )
    }
)
