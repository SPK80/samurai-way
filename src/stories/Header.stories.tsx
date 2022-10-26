import React from 'react'
import { Header } from 'app/ui/Header/Header'
import { ComponentStory } from '@storybook/react'
import { ReduxStoreProviderDecorator } from './decorators/ReduxStoreProviderDecorator'
import { BrowserRouterDecorator } from './decorators/BrowserRouterDecorator'

export default {
    title: 'Header',
    component: Header,
    decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator],
}

const Template: ComponentStory<typeof Header> = (args) => (
    <Header title={'Header Story'} />
)

export const HeaderStory = Template.bind({})
