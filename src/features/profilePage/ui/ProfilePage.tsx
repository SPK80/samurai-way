import React, { memo, useEffect } from 'react'
import s from './Profile.module.css'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { profileApi } from '../dal/profileApi'
import { UserProfile } from './UserProfile'
import { UserPosts } from './UserPosts'
import { setUserProfileAC } from '../bll/profilePageActionCreators'
import { useAppSelector } from 'app/bll/store'

export const ProfilePage: React.FC = memo(() => {
    let { userId } = useParams()
    const authUserId = useAppSelector((state) => state.auth.userData?.id)

    const dispatch = useDispatch()
    useEffect(() => {
        if (!userId && !authUserId) return
        const uid = Number(userId ?? authUserId)
        profileApi
            .getProfile(uid)
            .then((res) => dispatch(setUserProfileAC(res)))
    }, [authUserId])

    return (
        <div className={s.profile}>
            <img
                src="https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-blue-technology-digital-electronics-cool-beam-background-image_340977.jpg"
                alt="banner"
            />
            <UserProfile />
            <UserPosts />
        </div>
    )
})
