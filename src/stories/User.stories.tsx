import React from "react";
import {User} from "../components/content/Users/User";

export default {
    title: 'User',
    component: User,
}

export const PavelUser = () => (
    <User
        name={'Pavel'}
        avatar={'https://avatars.githubusercontent.com/u/36849366?v=4'}
        status={'Study React-Redux'}
        location={{country: "Rus", city: "Moscow"}}
        following={false}
        id={'1'}
    />
)