import React, { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app'
import { fetchProfileTC, fetchUserStatusTC } from '../bll/thunks'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { UserStatus } from './UserStatus'
import { FlexBox } from 'common/components/FlexBox'
import { UserPhoto } from './UserPhoto'

export const UserProfile: React.FC<{ userId?: number | null }> = memo(({ userId }) => {
    const { userProfile } = useAppSelector((state) => state.profilePage)
    const authUserId = useAppSelector((state) => state.auth.userData?.id)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const id = userId ?? authUserId
        if (id) {
            dispatch(fetchProfileTC(id))
            dispatch(fetchUserStatusTC(id))
        }
    }, [userId, authUserId, dispatch])

    if (!userProfile) return <h1>Profile id:{userId} not found</h1>

    return (
        <Paper sx={{ p: 2, overflow: 'hidden', mb: 1 }}>
            <FlexBox>
                <Stack marginRight={2}>
                    <UserPhoto isOwn={!userId} />
                    <br />
                    <FieldView text={userProfile.fullName} />
                    <UserStatus isOwn={!userId} />
                </Stack>
                <Stack>
                    {userProfile.lookingForAJob && (
                        <FieldView text={userProfile.lookingForAJobDescription} />
                    )}
                    <ObjectView object={userProfile.contacts} />
                </Stack>
            </FlexBox>
        </Paper>
    )
})

const FieldView: React.FC<{ caption?: string; text: string | null }> = ({ caption, text }) => {
    if (!text) return <></>
    return (
        <div>
            {caption && <span>{caption}:</span>}
            <span>{text}</span>
        </div>
    )
}

const ObjectView: React.FC<{ object: any }> = ({ object }) => {
    const fields = Object.getOwnPropertyNames(object).filter((key) => object[key])
    if (fields.length === 0) return <></>
    return (
        <div>
            {fields.map((key) => (
                <FieldView key={key} caption={key} text={object[key]} />
            ))}
        </div>
    )
}
