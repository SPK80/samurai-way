import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AuthPage } from 'features/loginPage'
import { ReduxStoreProviderDecorator } from './decorators/ReduxStoreProviderDecorator'
import { BrowserRouterDecorator } from './decorators/BrowserRouterDecorator'

export default {
    title: 'Login',
    component: AuthPage,
    decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator],
} as ComponentMeta<typeof AuthPage>

const Template: ComponentStory<typeof AuthPage> = () => <AuthPage />

export const LoginStory = Template.bind({})
