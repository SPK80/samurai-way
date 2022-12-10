import { v1 } from 'uuid'
import { DialogsPageActionTypes } from './actions'
import { UserProfileWithPhotosType } from 'features/profilePage/dal/profileApi'
import { RequestStatus } from 'common/bll/types'

const initialState: DialogsPageStateType = {
    requestStatus: RequestStatus.idle,
    userProfilesCatch: {},
    dialogs: {
        [v1()]: {
            title: 'First dialog',
            messages: [
                { id: v1(), text: 'Hi', userId: 3 },
                { id: v1(), text: 'How is your?', userId: 2 },
            ],
        },
        [v1()]: {
            title: 'Second dialog',
            messages: [
                { id: v1(), text: 'Yo', userId: 26623 },
                { id: v1(), text: 'What`s up!?', userId: 3 },
            ],
        },
    },
}

export const dialogsPageReducer = (
    state: DialogsPageStateType = initialState,
    action: DialogsPageActionTypes
): DialogsPageStateType => {
    switch (action.type) {
        case 'DIALOGS/SET-STATUS':
            return { ...state, requestStatus: action.status }
        case 'ADD-MESSAGE':
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    [action.dialogId]: {
                        ...state.dialogs[action.dialogId],
                        messages: [
                            ...state.dialogs[action.dialogId].messages,
                            {
                                id: v1(),
                                userId: action.userId,
                                text: action.text,
                            },
                        ],
                    },
                },
            }

        case 'ADD-USER-PROFILE-TO-CATCH':
            const userProfilesCatch = state.userProfilesCatch
            userProfilesCatch[action.userProfile.userId] = action.userProfile
            return { ...state, userProfilesCatch }

        default:
            return state
    }
}

//===TYPES====================================================================================================

export type MessageType = {
    id: string
    userId: number
    text: string
}

export type DialogType = {
    title: string
    messages: MessageType[]
}

export type DialogsType = {
    [dialogIndex: string]: DialogType
}

export type DialogsPageStateType = {
    requestStatus: RequestStatus
    dialogs: DialogsType
    userProfilesCatch: { [userId: number]: UserProfileWithPhotosType }
}
