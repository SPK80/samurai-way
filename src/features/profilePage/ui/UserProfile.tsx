import React, { memo, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'app'
import { fetchProfileTC } from '../bll/thunks'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { UserStatus } from './UserStatus'
import { FlexBox } from 'common/components/FlexBox'
import { UserPhoto } from './UserPhoto'
import { getValidIdNumber } from 'common/bll/utils'
import { useParams } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import { EditProfileForm } from './EditProfileForm'
import { ViewProfileData } from './ViewProfileData'
import IconButton from '@mui/material/IconButton'

export const UserProfile: React.FC = memo(() => {
    const { userId } = useParams()
    const numberUserId = getValidIdNumber(userId)
    const userProfile = useAppSelector((state) => state.profilePage.userProfile)
    const authUserId = useAppSelector((state) => state.auth.userData?.id)
    const dispatch = useAppDispatch()
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if (!authUserId) return
        dispatch(fetchProfileTC(numberUserId || authUserId))
    }, [authUserId, userId, dispatch])

    if (!userProfile) return <h1>Profile not found</h1>

    return (
        <Paper sx={{ p: 2, mb: 1, overflow: 'hidden' }}>
            <FlexBox maxWidth={'600px'}>
                <Stack marginRight={2}>
                    <UserPhoto isOwn={!numberUserId} />
                    <br />
                    <UserStatus />
                </Stack>
                <Stack width={'100%'}>
                    {edit ? (
                        <EditProfileForm onClose={() => setEdit(false)} />
                    ) : (
                        <>
                            <FlexBox alignItems={'flex-start'}>
                                <ViewProfileData />
                                <IconButton color="primary" onClick={() => setEdit(true)}>
                                    <EditIcon />
                                </IconButton>
                            </FlexBox>
                        </>
                    )}
                </Stack>
            </FlexBox>
        </Paper>
    )
})
