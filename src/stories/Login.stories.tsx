import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Login} from "../components/Login";
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";

export default {
    title: 'Login',
    component: Login,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = () => <Login/>

export const LoginStory = Template.bind({})
