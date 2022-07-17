import {UserType} from "../../../redux/reducers/usersPageReducer";
import React, {useEffect, useState} from "react";
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
import {Progress} from "../../common/Progress";

type StatusType = 'idle' | 'progress' | 'error' | 'success'

export const UsersList: React.FC = () => {
    
    const usersListState = useSelector<AppStateType, Array<UserType>>(state => state.usersPage.usersList)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)
    const currentPage = useSelector<AppStateType, number>(state => state.usersPage.currentPage)
    const totalCount = useSelector<AppStateType, number>(state => state.usersPage.totalCount)
    
    const dispatch = useDispatch()
    const setUsers = (usersList: Array<UserType>) => dispatch(setUsersAC(usersList))
    const setTotalCount = (totalCount: number) => dispatch(setTotalCountAC(totalCount))
    
    const [status, setStatus] = useState<StatusType>('idle')
    const getUsers = () => {
        setStatus('progress')
        api.getUsers(currentPage, pageSize)
            .then(res => {
                setTotalCount(res.totalCount)
                setUsers(res.items)
                setStatus('success')
            })
            .catch(err => {
                    setStatus('error')
                }
            )
    }
    
    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, pageSize])
    
    return (
        <div className={s.usersList}>
            
            {status === "progress" && <Progress/>}
            {status === "error" && <h3>Error</h3>}
            {status === "success" && <h3>Success</h3>}
            
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

