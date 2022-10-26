import React from 'react'
import { Messages } from 'features/dialogsPage/ui/Messages'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ReduxStoreProviderDecorator } from './decorators/ReduxStoreProviderDecorator'

export default {
    title: 'Messages',
    component: Messages,
    decorators: [ReduxStoreProviderDecorator],
} as ComponentMeta<typeof Messages>

const Template: ComponentStory<typeof Messages> = (args) => <Messages />

export const MessagesStory = Template.bind({})
