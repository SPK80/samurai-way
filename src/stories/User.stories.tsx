import React from "react";
import {User} from "../components/content/Users/User";
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {BrowserRouterDecorator} from "./decorators/BrowserRouterDecorator";

export default {
    title: 'User',
    component: User,
    decorators: [BrowserRouterDecorator, ReduxStoreProviderDecorator]
} as ComponentMeta<typeof User>

const Template: ComponentStory<typeof User> = (args) => <User id={args.id}/>

export const UserStory = Template.bind({})
UserStory.args = {id: '1'}