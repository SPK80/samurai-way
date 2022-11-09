import React, { memo, useEffect, useState } from 'react'
import { Message } from './Message'
import { MessageType } from '../bll/dialogsPageReducer'
import { profileApi, UserProfileWithPhotosType } from '../../profilePage/dal/profileApi'
import { setAppErrorAC, setAppStatusAC } from 'app'
import { RequestStatus } from 'common/types'

type PropsType = {
    messages: MessageType[]
}
type UsersCacheType = {
    [userId: number]: UserProfileWithPhotosType
}

export const Messages: React.FC<PropsType> = memo(({ messages }) => {
    const [usersCache, setUsersCache] = useState<UsersCacheType>({})
    useEffect(() => {
        setAppStatusAC(RequestStatus.loading)
        profileApi
            .getProfile(userId)
            .then((p) => setUsersCache())
            .catch((error) => setAppErrorAC(error))
            .finally(() => setAppStatusAC(RequestStatus.idle))
    }, [])
    return (
        <>
            {messages.map((m) => (
                <Message key={m.id} message={m} userProfile={usersCache[m.userId]} />
            ))}
        </>
    )
})
