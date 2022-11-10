import { Dispatch } from 'redux'
import { AppActionsType, setAppErrorAC } from 'app'
import { RequestStatus } from 'common/bll/types'
import { profileApi } from 'features/profilePage/dal/profileApi'
import { addUserProfileToCatchAC, DialogsPageActionTypes, setDialogsStatusAC } from './actions'

export const fetchUserProfilesCatchTC =
    (userIds: number[]) => async (dispatch: Dispatch<DialogsPageActionTypes | AppActionsType>) => {
        if (userIds.length < 1) return
        dispatch(setDialogsStatusAC(RequestStatus.loading))
        try {
            await Promise.allSettled(
                userIds.map((id) =>
                    profileApi
                        .getProfile(id)
                        .then((profile) => dispatch(addUserProfileToCatchAC(profile)))
                        .catch(console.error)
                )
            )
        } catch (err: any) {
            dispatch(setAppErrorAC(err))
        } finally {
            dispatch(setDialogsStatusAC(RequestStatus.idle))
        }
    }
