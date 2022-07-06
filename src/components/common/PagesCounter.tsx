import React, {ChangeEvent} from "react";
import s from "../content/Users/pagesCounter.module.css"

type PagesCounterPropsType = {
    totalCount: number
    pageSizeIndex: number
    pageSizeVariants?: Array<number>
    defaultPageSizeIndex?: number
    currentPage: number
    onPageSizeChanged: (newSize: number) => void
    onCurrentPageChanged: (newCurrentPage: number) => void
}

export const PagesCounter: React.FC<PagesCounterPropsType> =
    ({
         pageSizeIndex, currentPage, totalCount,
         onPageSizeChanged, onCurrentPageChanged,
         pageSizeVariants = [5, 10, 50],
         defaultPageSizeIndex = 0,
     }) => {

        let pageSize = pageSizeVariants[pageSizeIndex]
        if (!pageSize) {
            pageSize = pageSizeVariants[defaultPageSizeIndex];
            onPageSizeChanged(defaultPageSizeIndex)
        }
        const pagesCount = Math.ceil(totalCount / pageSize)
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
                    {pageSizeVariants?.map(ps => <option value={ps}>{ps}</option>)}
                </select>
            </div>
        )
    }