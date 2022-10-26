import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LoginPage } from 'features/loginPage'
import { ReduxStoreProviderDecorator } from './decorators/ReduxStoreProviderDecorator'
import { BrowserRouterDecorator } from './decorators/BrowserRouterDecorator'

export default {
    title: 'Login',
    component: LoginPage,
    decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator],
} as ComponentMeta<typeof LoginPage>

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage />

export const LoginStory = Template.bind({})
