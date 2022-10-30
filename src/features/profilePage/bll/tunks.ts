import { Dispatch } from 'redux'
import { AppActionsType, setAppErrorAC, setAppStatusAC } from 'app'
import { profileApi, UserProfileType } from '../dal/profileApi'
import { ProfilePageActionTypes, setUserProfileAC } from './actions'
import { RequestStatus } from 'common/types'

export const fetchProfileTC =
    (userId: number) =>
    async (dispatch: Dispatch<ProfilePageActionTypes | AppActionsType>) => {
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
        dispatch(setAppStatusAC(RequestStatus.loading))
        try {
            await profileApi.setProfile(profile)
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }
