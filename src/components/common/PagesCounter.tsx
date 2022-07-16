import React, {ChangeEvent, useState} from "react";
import s from "./pagesCounter.module.css"

type PagesCounterPropsType = {
    totalCount: number
    currentPage: number
    defaultPageSizeIndex: number
    pageSizeVariants: Array<number>
    onCurrentPageChanged: (newCurrentPage: number) => void
    onPageSizeSelected: (pageSize: number) => void
}

export const PagesCounter: React.FC<PagesCounterPropsType> = (props) => {
    const defaultPageSize = props.pageSizeVariants[props.defaultPageSizeIndex]
    const [pageSize, setPageSize] = useState(defaultPageSize)
    
    const pagesCount = Math.ceil(props.totalCount / pageSize)
    const amplitude = 3
    const pages = []
    let startPage = 1
    let endPage = pagesCount
    if (pagesCount > amplitude * 2) {
        startPage = props.currentPage - amplitude;
        endPage = props.currentPage + amplitude;
        if (startPage < 1) {
            startPage = 1
            endPage = startPage + amplitude * 2
        }
        if (endPage > pagesCount) {
            endPage = pagesCount
            startPage = endPage - amplitude * 2
        }
    }
    for (let i = startPage; i <= endPage; i++) pages.push(i)
    
    const onChangePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
        const newPageSize: number = +e.currentTarget.value;
        setPageSize(newPageSize)
        props.onPageSizeSelected(newPageSize)
        const newCurrentPage = Math.ceil((props.currentPage * pageSize - pageSize + 1) / newPageSize);
        props.onCurrentPageChanged(newCurrentPage)
    }
    
    return (
        <div className={s.container}>
            {pages.map(p => {
                    const pageClassName = s.page + ' ' + (props.currentPage === p ? s.currentPage : '');
                    const onClickPageHandler = () => props.onCurrentPageChanged(p)
                    return (
                        <span
                            key={'page-' + p}
                            className={pageClassName}
                            onClick={onClickPageHandler}
                        >
                            {p}
                            </span>
                    )
                }
            )}
            <select onChange={onChangePageSize} value={pageSize}>
                {props.pageSizeVariants?.map(ps => <option value={ps}>{ps}</option>)}
            </select>
        </div>
    )
}