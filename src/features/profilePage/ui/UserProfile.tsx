import React, { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app'
import { fetchProfileTC } from '../bll/thunks'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { Photo } from './photo/Photo'

export const UserProfile: React.FC<{ userId?: number | null }> = memo(({ userId }) => {
    const userProfile = useAppSelector((state) => state.profilePage.userProfile)
    const authUserId = useAppSelector((state) => state.auth.userData?.id)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const id = userId ?? authUserId
        id && dispatch(fetchProfileTC(id))
    }, [userId])

    if (!userProfile) return <h1>Profile id:{userId} not found</h1>
    return (
        <Paper sx={{ p: 1, overflow: 'hidden', mb: 1 }}>
            <Box sx={{ display: 'flex' }}>
                <Photo
                    src={userProfile.photos.large || userProfile.photos.small}
                    changeable={!userId}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <FieldView text={userProfile.fullName} />
                    {userProfile.lookingForAJob && (
                        <FieldView text={userProfile.lookingForAJobDescription} />
                    )}
                    <ObjectView object={userProfile.contacts} />
                </Box>
            </Box>
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
