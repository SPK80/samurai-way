import {UserType} from "../../../redux/reducers/usersPageReducer";
import React, {useEffect} from "react";
import s from "./usersList.module.css"
import {User} from "./User";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    followUserAC, setCurrentPageAC, setPageSizeAC,
    setTotalCountAC,
    setUsersAC,
    unfollowUserAC
} from "../../../redux/reducers/usersPageActionCreators";
import axios from "axios";
import {PagesCounter} from "../../common/PagesCounter";

export const UsersList: React.FC = () => {
    
    const usersListState = useSelector<AppStateType, Array<UserType>>(state => state.usersPage.usersList)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)
    const currentPage = useSelector<AppStateType, number>(state => state.usersPage.currentPage)
    const totalCount = useSelector<AppStateType, number>(state => state.usersPage.totalCount)
    
    const dispatch = useDispatch()
    const dispatchSetUsers = (usersList: Array<UserType>) => dispatch(setUsersAC(usersList))
    const dispatchSetTotalCount = (totalCount: number) => dispatch(setTotalCountAC(totalCount))
    
    const getUsers = () => {
        const url = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
        axios.get(url).then(response => {
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
    }
    
    useEffect(() => {
        console.log('UsersList did mount')
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
        console.log('changed currentPage:', currentPage)
        console.log('changed pageSize:', pageSize)
        
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, pageSize])
    
    return (
        <div className={s.usersList}>
            <PagesCounter
                defaultPageSizeIndex={1}
                pageSizeVariants={[5, 10, 100]}
                currentPage={currentPage}
                totalCount={totalCount}
                onPageSizeSelected={(pageSize) => dispatch(setPageSizeAC(pageSize))}
                onCurrentPageChanged={(newCurrentPage) => dispatch(setCurrentPageAC(newCurrentPage))}
            />
            {usersListState.map(u =>
                <User
                    key={u.id}
                    id={u.id}
                />)}
            <button>Show more</button>
        </div>
    )
}

