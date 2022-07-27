import React, {useState} from "react";
import {PagesCounter} from "../components/common/PagesCounter";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'PagesCounter',
    component: PagesCounter,
    args: {
        pageSizeVariants: [1, 5, 10, 50, 100],
        pageSize: 10,
        currentPage: 1,
        totalCount: 123,
    }
} as ComponentMeta<typeof PagesCounter>;

const Template: ComponentStory<typeof PagesCounter> = (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    const [pageSize, setPageSize] = useState(args.pageSize)

    return <PagesCounter
        pageSize={pageSize}
        currentPage={currentPage}
        totalCount={args.totalCount}
        pageSizeVariants={args.pageSizeVariants}
        onCurrentPageChanged={cp => {
            setCurrentPage(cp)
            action('onCurrentPageChanged')(cp)
        }}
        onPageSizeSelected={ps => {
            setPageSize(ps)
            action('onPageSizeSelected')(ps)
        }}
    />
}

export const PagesCounterStory = Template.bind({});
PagesCounterStory.args = {}