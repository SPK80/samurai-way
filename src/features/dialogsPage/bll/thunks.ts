import { Dispatch } from 'redux'
import { AppActionsType, setAppErrorAC, setAppStatusAC } from 'app'
import { RequestStatus } from 'common/types'
import { profileApi } from 'features/profilePage/dal/profileApi'
import { addUserProfileToCatchAC, DialogsPageActionTypes } from './actions'

export const fetchUserProfilesCatchTC =
    (userIds: number[]) => async (dispatch: Dispatch<DialogsPageActionTypes | AppActionsType>) => {
        dispatch(setAppStatusAC(RequestStatus.loading))
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
            dispatch(setAppStatusAC(RequestStatus.idle))
        }
    }
