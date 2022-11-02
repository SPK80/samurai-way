import React, { memo, useEffect } from 'react'
import s from './Profile.module.css'
import { useAppDispatch, useAppSelector } from 'app'
import { fetchProfileTC } from '../bll/thunks'

export const UserProfile: React.FC<{ userId: number }> = memo(({ userId }) => {
    const userProfile = useAppSelector((state) => state.profilePage.userProfile)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileTC(userId))
    }, [userId])

    if (!userProfile) return <h1>Profile id:{userId} not found</h1>
    return (
        <div className={s.userProfile}>
            <img
                src={userProfile.photos.large || userProfile.photos.small}
                alt="avatar"
            />
            <FieldView text={userProfile.fullName} />
            {userProfile.lookingForAJob && (
                <FieldView text={userProfile.lookingForAJobDescription} />
            )}
            <ObjectView object={userProfile.contacts} />
        </div>
    )
})

const FieldView: React.FC<{ caption?: string; text: string | null }> = ({
    caption,
    text,
}) => {
    if (!text) return <></>
    return (
        <div>
            {caption && <span>{caption}:</span>}
            <span>{text}</span>
        </div>
    )
}

const ObjectView: React.FC<{ object: any }> = ({ object }) => {
    const fields = Object.getOwnPropertyNames(object).filter(
        (key) => object[key]
    )
    if (fields.length === 0) return <></>
    return (
        <div>
            {fields.map((key) => (
                <FieldView key={key} caption={key} text={object[key]} />
            ))}
        </div>
    )
}
