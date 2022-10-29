import { Dispatch } from 'redux'
import {
    AppActionsType,
    RequestStatusType,
    setAppErrorAC,
    setAppStatusAC,
} from 'app/bll/appReducer'
import { profileApi } from '../dal/profileApi'
import { ProfilePageActionTypes, setUserProfileAC } from './actions'

export const fetchProfileTC =
    (userId: number) =>
    async (dispatch: Dispatch<ProfilePageActionTypes | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatusType.loading))
        try {
            const profile = await profileApi.getProfile(userId)
            dispatch(setUserProfileAC(profile))
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setAppStatusAC(RequestStatusType.idle))
        }
    }
