import { Dispatch } from 'redux'
import { AppActionsType, setAppErrorAC, setAppStatusAC } from 'app'
import { profileApi, UserProfileType } from '../dal/profileApi'
import {
    ProfilePageActionTypes,
    setUserPhotosAC,
    setUserProfileAC,
    setUserProfileDataAC,
    setUserStatusAC,
} from './actions'
import { RequestStatus } from 'common/bll/types'

export const fetchProfileTC =
    (userId: number) => async (dispatch: Dispatch<ProfilePageActionTypes | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
        try {
            const profile = await profileApi.getProfile(userId)
            dispatch(setUserProfileAC(profile))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }

export const setProfileTC =
    (profile: UserProfileType) =>
    async (dispatch: Dispatch<ProfilePageActionTypes | AppActionsType>) => {
        try {
            dispatch(setAppStatusAC(RequestStatus.loading))
            await profileApi.setProfile(profile)
            dispatch(setUserProfileDataAC(profile))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }

export const updateProfilePhotoTC =
    (photo: File) => async (dispatch: Dispatch<ProfilePageActionTypes | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
        try {
            const data = await profileApi.updatePhoto(photo)
            dispatch(setUserPhotosAC(data))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }

export const fetchUserStatusTC =
    (userId: number) => async (dispatch: Dispatch<ProfilePageActionTypes | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
        try {
            const status = await profileApi.getStatus(userId)
            dispatch(setUserStatusAC(status))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }

export const updateUserStatusTC =
    (status: string) => async (dispatch: Dispatch<ProfilePageActionTypes | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
        try {
            await profileApi.setStatus(status)
            dispatch(setUserStatusAC(status))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }
