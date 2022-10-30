import React, { memo, useEffect } from 'react'
import s from './Profile.module.css'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'app'
import { getValidIdNumber } from 'common/utils'
import { fetchProfileTC } from '../bll/tunks'

export const UserProfile: React.FC = memo(() => {
    const userProfile = useAppSelector((state) => state.profilePage.userProfile)
    let { userId } = useParams()
    const authUserId = useAppSelector((state) => state.auth.userData?.id)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const uid = getValidIdNumber(userId) ?? authUserId
        if (uid) dispatch(fetchProfileTC(uid))
    }, [authUserId, userId])

    if (!userProfile) return <div>Profile not found</div>

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
                <FieldView caption={key} text={object[key]} />
            ))}
        </div>
    )
}
