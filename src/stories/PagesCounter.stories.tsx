import React, {useState} from "react";
import {PagesCounter} from "../components/common/PagesCounter";
import {action} from "@storybook/addon-actions";

export default {
    title: 'PagesCounter',
    component: PagesCounter,
}

export const WelcomeMessage = () => {
    
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    
    const onCurrentPageChangedHandler = (newCurrentPage: number) => {
        setCurrentPage(newCurrentPage)
        action(`Current page changed on ${newCurrentPage}`)
    }
    
    const onPageSizeChangedHandler = (newSize: number) => {
        setPageSize(newSize)
        action(`Page size changed on ${newSize}`)
    }
    
    return (
        <PagesCounter
            pageSize={pageSize}
            currentPage={currentPage}
            totalCount={26}
            onCurrentPageChanged={onCurrentPageChangedHandler}
            onPageSizeChanged={onPageSizeChangedHandler}
        />)
}