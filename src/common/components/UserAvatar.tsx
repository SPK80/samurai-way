import React, { memo } from 'react'
import Avatar from '@mui/material/Avatar'
import { UserProfileWithPhotosType } from 'features/profilePage/dal/profileApi'

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
