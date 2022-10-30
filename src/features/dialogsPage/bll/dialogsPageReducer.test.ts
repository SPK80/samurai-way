import { v1 } from 'uuid'
import {
    dialogsPageReducer,
    DialogsPageType,
    DialogType,
    MessageType,
} from './dialogsPageReducer'
import { addMessageAC, changeNewMessageTextAC } from './actions'

let initialState: DialogsPageType

beforeEach(() => {
    initialState = {
        newMessageText: 'test message',
        dialogs: [
            { id: v1(), name: 'Dimych' },
            { id: v1(), name: 'Andrey' },
            { id: v1(), name: 'Sveta' },
        ] as Array<DialogType>,
        messages: [
            { id: v1(), text: 'Hi' },
            { id: v1(), text: 'How is your?' },
            { id: v1(), text: 'Yo' },
        ] as Array<MessageType>,
    }
})

test('new message must be added', () => {
    const action = addMessageAC()
    const endState = dialogsPageReducer(initialState, action)
    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].text).toBe(initialState.newMessageText)
})

test('newMessageText must be changed', () => {
    const newMessageText = 'changed text'
    const action = changeNewMessageTextAC(newMessageText)
    const endState = dialogsPageReducer(initialState, action)
    expect(endState.newMessageText).toBe(newMessageText)
})
