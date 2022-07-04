import {UserType} from "../../../redux/reducers/usersPageReducer";
import React, {useEffect} from "react";
import s from "./usersList.module.css"
import {User} from "./User";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    followUserAC,
    setTotalCountAC,
    setUsersAC,
    unfollowUserAC
} from "../../../redux/reducers/usersPageActionCreators";
import axios from "axios";

export const UsersList: React.FC = () => {

    const usersListState = useSelector<AppStateType, Array<UserType>>(state => state.usersPage.usersList)

    const dispatch = useDispatch()
    const dispatchFollow = (userId: string) => dispatch(followUserAC(userId))
    const dispatchUnfollow = (userId: string) => dispatch(unfollowUserAC(userId))
    const dispatchSetUsers = (usersList: Array<UserType>) => dispatch(setUsersAC(usersList))
    const dispatchSetTotalCount = (totalCount: number) => dispatch(setTotalCountAC(totalCount))
    const totalCount = useSelector<AppStateType, number>(state => state.usersPage.totalCount)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)
    const pagesCount = Math.ceil(totalCount / pageSize)

    useEffect(() => {
        console.log("UsersList")
        if (usersListState.length > 0) return
        const url = `https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}`
        axios.get(url)
            .then(response => {
                response.data.error && console.error(response.data.error)

                dispatchSetTotalCount(response.data.totalCount)

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

    console.log('totalCount:', totalCount)
    console.log('pagesCount:', pagesCount)
    console.log('pageSize:', pageSize)

    const pages = []
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.usersList}>
            {pages.map(p => <span key={p}>{p}</span>)}
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