import React, {useState} from "react";
import {PagesCounter} from "../components/common/PagesCounter";
import {action} from "@storybook/addon-actions";

export default {
    title: 'PagesCounter',
    component: PagesCounter,
}

export const WelcomeMessage = () => {

    const [pageSizeIndex, setPageSizeIndex] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    console.log(pageSizeIndex)
    console.log(currentPage)

    const onCurrentPageChangedHandler = (newCurrentPage: number) => {
        setCurrentPage(newCurrentPage)
        action(`Current page changed on ${newCurrentPage}`)
    }

    const onPageSizeChangedHandler = (newSize: number) => {
        setPageSizeIndex(newSize)
        action(`Page size changed on ${newSize}`)
    }

    return (
        <PagesCounter
            pageSizeIndex={pageSizeIndex}
            currentPage={currentPage}
            totalCount={26}
            onCurrentPageChanged={onCurrentPageChangedHandler}
            onPageSizeChanged={onPageSizeChangedHandler}
            defaultPageSizeIndex={1}
            pageSizeVariants={[1, 10, 20, 100]}
        />)
}