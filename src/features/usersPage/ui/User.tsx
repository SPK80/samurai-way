import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import defaultAvatar from 'common/assets/avatar.png'
import { UserType } from '../bll/usersPageReducer'
import { RequestingStateType, RequestStatus } from 'common/bll/types'
import { ListItem, ListItemAvatar } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { FollowingButton } from './FollowingButton'

const CustomListItemAvatar = styled(ListItemAvatar)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

type PropsType = {
    userData: UserType & RequestingStateType
    onFollow: (userId: number, isFollow: boolean) => void
}

export const User: React.FC<PropsType> = memo(({ userData, onFollow }) => {
    const onClickFollowHandler = () => onFollow(userData.id, !userData.followed)
    const avatarUrl = userData.photos.small || userData.photos.large || defaultAvatar

    return (
        <Paper variant={'outlined'} sx={{ mb: 2, width: '400px' }}>
            <ListItem alignItems="flex-start">
                <CustomListItemAvatar>
                    <Box marginBottom={1}>
                        <NavLink to={'/profile/' + userData.id}>
                            <Avatar src={avatarUrl} alt="avatar" sx={{ width: 56, height: 56 }} />
                        </NavLink>
                    </Box>
                    <FollowingButton
                        isFollowed={userData.followed}
                        isLoading={userData.request.status === RequestStatus.loading}
                        onClick={onClickFollowHandler}
                    />
                </CustomListItemAvatar>
                <Divider orientation="vertical" flexItem sx={{ mr: 2, ml: 2 }} />
                <ListItemText primary={userData.name} secondary={userData.status} />
            </ListItem>
        </Paper>
    )
})
