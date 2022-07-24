import React from "react";
import {Header} from "../components/Header/Header";
import {ComponentStory} from "@storybook/react";
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator";

export default {
    title: 'Header',
    component: Header,
    decorators: [ReduxStoreProviderDecorator]
}

const Template: ComponentStory<typeof Header> = (args) =>
    <Header title={'Header Story'}/>

export const HeaderStory = Template.bind({})
