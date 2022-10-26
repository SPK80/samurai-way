import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Login } from '../common/components/Login'
import { ReduxStoreProviderDecorator } from './decorators/ReduxStoreProviderDecorator'
import { BrowserRouterDecorator } from './decorators/BrowserRouterDecorator'

export default {
    title: 'Login',
    component: Login,
    decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator],
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = () => <Login />

export const LoginStory = Template.bind({})
