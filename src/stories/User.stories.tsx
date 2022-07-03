import React, {useState} from "react";
import {User} from "../components/content/Users/User";
import {UserType} from "../redux/reducers/usersPageReducer";
import {action} from "@storybook/addon-actions";

export default {
    title: 'User',
    component: User,
}

export const PavelUser = () => {
    const [userData, setUserData] = useState<UserType>({
        id: '1',
        avatar: 'https://avatars.githubusercontent.com/u/36849366?v=4',
        following: false,
        location: {country: "Rus", city: "Moscow"},
        status: 'Study React-Redux',
        name: 'Pavel',
    })
    
    return (
        <User
            userData={userData}
            follow={(id) => {
                setUserData({...userData, following: true})
                action("follow")
            }}
            unfollow={(id) => {
                setUserData({...userData, following: false})
                action("unfollow")
            }}
        />
    )
}