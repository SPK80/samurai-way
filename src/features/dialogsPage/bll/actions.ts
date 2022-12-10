import { UserProfileWithPhotosType } from 'features/profilePage/dal/profileApi'
import { RequestStatus } from 'common/bll/types'

export const addMessageAC = (dialogId: string, userId: number, text: string) =>
    ({
        type: 'ADD-MESSAGE',
        dialogId,
        userId,
        text,
    } as const)

export const addUserProfileToCatchAC = (userProfile: UserProfileWithPhotosType) =>
    ({
        type: 'ADD-USER-PROFILE-TO-CATCH',
        userProfile,
    } as const)

export const setDialogsStatusAC = (status: RequestStatus) =>
    ({ type: 'DIALOGS/SET-STATUS', status } as const)

export type DialogsPageActionTypes =
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof addUserProfileToCatchAC>
    | ReturnType<typeof setDialogsStatusAC>
