import {UserType} from "../../../redux/reducers/usersPageReducer";
import React, {useEffect} from "react";
import s from "./usersList.module.css"
import {User} from "./User";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    setCurrentPageAC, setPageSizeAC,
    setTotalCountAC,
    setUsersAC,
} from "../../../redux/reducers/usersPageActionCreators";
import {PagesCounter} from "../../common/PagesCounter";
import {api} from "./api";

export const UsersList: React.FC = () => {
    
    const usersListState = useSelector<AppStateType, Array<UserType>>(state => state.usersPage.usersList)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)
    const currentPage = useSelector<AppStateType, number>(state => state.usersPage.currentPage)
    const totalCount = useSelector<AppStateType, number>(state => state.usersPage.totalCount)
    
    const dispatch = useDispatch()
    const setUsers = (usersList: Array<UserType>) => dispatch(setUsersAC(usersList))
    const setTotalCount = (totalCount: number) => dispatch(setTotalCountAC(totalCount))
    
    const getUsers = () => {
        api.getUsers(currentPage, pageSize)
            .then(res => {
                setTotalCount(res.totalCount)
                setUsers(res.users)
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

