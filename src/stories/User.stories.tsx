import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BrowserRouterDecorator } from './decorators/BrowserRouterDecorator'
import { initialRequestingState } from 'common/bll/types'
import { User } from 'features/usersPage/ui/User'
import { action } from '@storybook/addon-actions'

export default {
    title: 'User',
    component: User,
    decorators: [BrowserRouterDecorator],
} as ComponentMeta<typeof User>

const Template: ComponentStory<typeof User> = (args) => {
    const [userData, setUserData] = useState(args.userData)

    const onFollowHandler = (userId: number, isFollow: boolean) => {
        action('onFollow ' + JSON.stringify({ userId, isFollow }))
        setUserData((ud) => ({
            ...ud,
            followed: !ud.followed,
        }))
    }

    return <User userData={userData} onFollow={onFollowHandler} />
}

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
