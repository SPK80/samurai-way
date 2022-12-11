import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app'
import { fetchUserStatusTC, updateUserStatusTC } from '../bll/thunks'
import { EditableTextField } from 'common/components/EditableTextField'
import { useParams } from 'react-router-dom'
import { getValidIdNumber } from 'common/bll/utils'

export const UserStatus: React.FC = () => {
    const { userStatus } = useAppSelector((state) => state.profilePage)
    const authUserId = useAppSelector((state) => state.auth.userData?.id)
    const dispatch = useAppDispatch()

    const { userId } = useParams()
    const numberUserId = getValidIdNumber(userId)
    const isOwn = !numberUserId

    useEffect(() => {
        if (!authUserId) return
        dispatch(fetchUserStatusTC(numberUserId || authUserId))
    }, [authUserId, userId, dispatch])

    const onSubmitHandler = (text: string) => {
        dispatch(updateUserStatusTC(text))
    }

    if (isOwn)
        return (
            <EditableTextField
                label={'status'}
                text={userStatus ?? 'No status'}
                onSubmit={onSubmitHandler}
            />
        )
    else return <span>{userStatus}</span>
}
