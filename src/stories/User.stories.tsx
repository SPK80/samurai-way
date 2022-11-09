import React from 'react'
import { ReduxStoreProviderDecorator } from './decorators/ReduxStoreProviderDecorator'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BrowserRouterDecorator } from './decorators/BrowserRouterDecorator'
import { initialRequestingState } from '../common/bll/types'
import { User } from '../features/usersPage/ui/User'

export default {
    title: 'User',
    component: User,
    decorators: [BrowserRouterDecorator, ReduxStoreProviderDecorator],
} as ComponentMeta<typeof User>

const Template: ComponentStory<typeof User> = (args) => <User userData={args.userData} />

export const UserStory = Template.bind({})
UserStory.args = {
    userData: {
        id: 1,
        status: 'status',
        name: 'name',
        followed: false,
        photos: { small: '', large: '' },
        request: initialRequestingState(),
    },
}
