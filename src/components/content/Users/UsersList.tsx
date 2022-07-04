import {UserType} from "../../../redux/reducers/usersPageReducer";
import React, {useEffect} from "react";
import s from "./usersList.module.css"
import {User} from "./User";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {followUserAC, setUsersAC, unfollowUserAC} from "../../../redux/reducers/usersPageActionCreators";
import axios from "axios";

export const UsersList: React.FC = () => {
    
    let totalCount = 0
    
    useEffect(() => {
        console.log("UsersList")
        if (usersListState.length > 0) return
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                
                totalCount = response.data.totalCount
                const error = response.data.error
                dispatchSetUsers(response.data.items.map((it: any): UserType =>
                    ({
                        id: it.id,
                        name: it.name,
                        avatarUrl: it.photos.small,
                        status: "",
                        following: false,
                        location: {country: "", city: ""},
                    }))
                )
            })
    }, [])
    
    const usersListState = useSelector<AppStateType, Array<UserType>>(state => state.usersPage.usersList)
    
    const dispatch = useDispatch()
    const dispatchFollow = (userId: string) => dispatch(followUserAC(userId))
    const dispatchUnfollow = (userId: string) => dispatch(unfollowUserAC(userId))
    const dispatchSetUsers = (usersList: Array<UserType>) => dispatch(setUsersAC(usersList))
    
    const pageSize = 10;
    const pagesCount = Math.ceil(totalCount / pageSize)
    console.log('pagesCount:', pagesCount)
    
    const pages = []
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i)
    }
    
    return (
        <div className={s.usersList}>
            {pages.map(p => <span>{p}</span>)}
            {usersListState.map(u =>
                <User
                    key={u.id}
                    userData={u}
                    follow={dispatchFollow}
                    unfollow={dispatchUnfollow}
                />)}
            <button>Show more</button>
        </div>
    )
}