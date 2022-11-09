import React, { useEffect } from 'react'
import { Message } from './Message'
import { MessageType } from 'features/dialogsPage/bll/dialogsPageReducer'
import { useAppDispatch, useAppSelector } from 'app'
import { fetchUserProfilesCatchTC } from '../bll/thunks'

export const Messages: React.FC<{ messages: MessageType[] }> = ({ messages }) => {
    const userProfilesCatch = useAppSelector((state) => state.dialogsPage.userProfilesCatch)
    const dispatch = useAppDispatch()
    useEffect(() => {
        const usersIds = messages.map((m) => m.userId)
        const setOfIds = new Set(usersIds)
        dispatch(fetchUserProfilesCatchTC(Array.from(setOfIds)))
    }, [messages])
    return (
        <>
            {messages.map((m) => (
                <Message key={m.id} message={m} userProfile={userProfilesCatch[m.userId]} />
            ))}
        </>
    )
}
