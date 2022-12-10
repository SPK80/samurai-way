import { v1 } from 'uuid'
import { dialogsPageReducer, DialogsPageStateType } from './dialogsPageReducer'
import { RequestStatus } from 'common/bll/types'
import { addMessageAC } from './actions'

let initialState: DialogsPageStateType

beforeEach(() => {
    initialState = {
        userProfilesCatch: {},
        requestStatus: RequestStatus.idle,
        dialogs: {
            ['testDialog']: {
                title: 'Dimych',
                messages: [
                    { id: v1(), userId: 0, text: 'Hi' },
                    { id: v1(), userId: 1, text: 'How is your?' },
                ],
            },
        },
    }
})

test('new message must be added', () => {
    const newMessageText = 'new message'
    const userId = 1

    const action = addMessageAC('testDialog', userId, newMessageText)
    const endState = dialogsPageReducer(initialState, action)

    expect(endState.dialogs['testDialog'].messages.length).toBe(
        initialState.dialogs['testDialog'].messages.length + 1
    )
    expect(endState.dialogs['testDialog'].messages[2].text).toBe(newMessageText)
    expect(endState.dialogs['testDialog'].messages[2].userId).toBe(userId)
})
