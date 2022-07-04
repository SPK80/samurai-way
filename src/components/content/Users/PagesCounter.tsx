import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import s from "./pagesCounter.module.css"
import {setCurrentPageAC} from "../../../redux/reducers/usersPageActionCreators";

export const PagesCounter: React.FC = () => {
    
    const totalCount = useSelector<AppStateType, number>(state => state.usersPage.totalCount)
    const pageSize = useSelector<AppStateType, number>(state => state.usersPage.pageSize)
    const currentPage = useSelector<AppStateType, number>(state => state.usersPage.currentPage)
    
    const dispatch = useDispatch()
    const dispatchSetCurrentPage = (page: number) => dispatch(setCurrentPageAC(page))
    
    const pagesCount = Math.ceil(totalCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    
    return (
        <>
            {pages.map(p => {
                    
                    const pageClassName = s.page + ' ' + (currentPage === p ? s.currentPage : '');
                    const onClickPageHandler = () => dispatchSetCurrentPage(p)
                    
                    return (<span
                        key={'page-' + p}
                        className={pageClassName}
                        onClick={onClickPageHandler}
                    >{p}</span>)
                    
                }
            )}
        </>
    )
}