import React, {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StatusType, UsersPageType, UserType} from "../../../bll/reducers/usersPageReducer";
import {AppStateType} from "../../../bll/redux-store";
import {
    setCurrentPageAC,
    setPageSizeAC, setStatusAC,
    setTotalCountAC,
    setUsersAC,
} from "../../../bll/reducers/usersPageActionCreators";
import {api} from "./api";
import {Progress} from "../../common/Progress";
import {PagesCounter} from "../../common/PagesCounter";
import {UsersList} from "./UsersList";

export const Users: React.FC = memo(() => {
    const {
        totalCount,
        pageSize,
        currentPage,
        usersList,
        status,
    } = useSelector<AppStateType, UsersPageType>(state => state.usersPage)
    
    const dispatch = useDispatch()
    const setUsers = (usersList: Array<UserType>) => dispatch(setUsersAC(usersList))
    const setTotalCount = (totalCount: number) => dispatch(setTotalCountAC(totalCount))
    const setStatus = (newStatus: StatusType) => dispatch(setStatusAC(newStatus))
    
    const getUsers = () => {
        setStatus('progress')
        api.getUsers(currentPage, pageSize)
            .then(res => {
                setTotalCount(res.totalCount)
                setUsers(res.items)
                setStatus('success')
            })
            .catch(() => {
                    setStatus('error')
                }
            )
    }
    
    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, pageSize])
    
    const onPageSizeSelectedHandler = (pageSize: number) =>
        dispatch(setPageSizeAC(pageSize))
    
    const onCurrentPageChangedHandler = (newCurrentPage: number) =>
        dispatch(setCurrentPageAC(newCurrentPage))
    
    return (
        <>
            <PagesCounter
                defaultPageSizeIndex={1}
                pageSizeVariants={[5, 10, 100]}
                currentPage={currentPage}
                totalCount={totalCount}
                onPageSizeSelected={onPageSizeSelectedHandler}
                onCurrentPageChanged={onCurrentPageChangedHandler}
            />
            {status === "progress" && <Progress/>}
            {status === "error" && <h3 color={'red'}>Error</h3>}
            {status === "success" && <UsersList usersList={usersList}/>}
        </>
    )
})