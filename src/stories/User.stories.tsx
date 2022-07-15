import React from "react";
import {User} from "../components/content/Users/User";
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'User',
    component: User,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof User>

const Template: ComponentStory<typeof User> = (args) => <User id={args.id}/>

export const UserStory = Template.bind({})
UserStory.args = {id: '1'}