import { Dispatch } from 'redux'
import {
    AppActionsType,
    RequestStatus,
    setAppErrorAC,
    setAppStatusAC,
} from 'app'
import { profileApi } from '../dal/profileApi'
import { ProfilePageActionTypes, setUserProfileAC } from './actions'

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
