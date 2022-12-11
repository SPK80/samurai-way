import React from 'react'
import { useAppSelector } from 'app'
import avatar from 'common/assets/avatar.png'
import { Photo } from './photo/Photo'

export const UserPhoto: React.FC<{ isOwn?: boolean }> = ({ isOwn }) => {
    const userProfile = useAppSelector((state) => state.profilePage.userProfile)

    const src = userProfile ? userProfile.photos.large || userProfile.photos.small : avatar

    return <Photo src={src} changeable={isOwn} />
}
