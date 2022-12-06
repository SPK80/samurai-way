import React, { memo, PropsWithChildren, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'app'
import { fetchProfileTC, fetchUserStatusTC, updateUserStatusTC } from '../bll/thunks'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { Photo } from './photo/Photo'
import { SendTextBox } from 'common/components/SendTextBox'

export const UserProfile: React.FC<{ userId?: number | null }> = memo(({ userId }) => {
    const { userProfile, userStatus } = useAppSelector((state) => state.profilePage)
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

    const onSubmitHandler = (text: string) => dispatch(updateUserStatusTC(text))

    return (
        <Paper sx={{ p: 1, overflow: 'hidden', mb: 1 }}>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <EditableTextField onSubmit={onSubmitHandler}>
                        {userStatus ?? 'No status'}
                    </EditableTextField>
                    <Photo
                        src={userProfile.photos.large || userProfile.photos.small}
                        changeable={!userId}
                    />
                </Box>
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

type PropsType = PropsWithChildren & {
    onSubmit: (text: string) => void
}

export const EditableTextField: React.FC<PropsType> = ({ onSubmit, children }) => {
    const [isEditing, setIsEditing] = useState(false)
    return isEditing ? (
        <SendTextBox
            onSubmit={onSubmit}
            onChangeText={console.log}
            onBlur={() => setIsEditing(false)}
            text={children?.toString() ?? ''}
        />
    ) : (
        <Box onDoubleClick={() => setIsEditing(true)}>{children}</Box>
    )
}
