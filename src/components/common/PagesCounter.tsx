import React, {ChangeEvent} from "react";
import s from "../content/Users/pagesCounter.module.css"

type PagesCounterPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageSizeChanged: (newSize: number) => void
    onCurrentPageChanged: (newCurrentPage: number) => void
}

export const PagesCounter: React.FC<PagesCounterPropsType> =
    ({
         pageSize, currentPage, totalCount,
         onPageSizeChanged, onCurrentPageChanged
     }) => {
        
        const pagesCount = Math.ceil(totalCount / pageSize)
        console.log('pagesCount:', pagesCount)
        console.log('totalCount:', totalCount)
        console.log('pageSize:', pageSize)

        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        
        const onChangePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
            onPageSizeChanged(+e.currentTarget.value)
        }
        
        return (
            <div className={s.container}>
                {pages.map(p => {
                        
                        const pageClassName = s.page + ' ' + (currentPage === p ? s.currentPage : '');
                        const onClickPageHandler = () => onCurrentPageChanged(p)
                        
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
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="50">50</option>
                </select>
            </div>
        )
    }