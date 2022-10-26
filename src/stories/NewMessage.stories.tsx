import React from 'react'
import { NewMessage } from 'features/dialogsPage/ui/NewMessage'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ReduxStoreProviderDecorator } from './decorators/ReduxStoreProviderDecorator'

export default {
    title: 'NewMessage',
    component: NewMessage,
    decorators: [ReduxStoreProviderDecorator],
} as ComponentMeta<typeof NewMessage>

const Template: ComponentStory<typeof NewMessage> = (args) => <NewMessage />

export const NewMessageStory = Template.bind({})
NewMessageStory.args = {}
