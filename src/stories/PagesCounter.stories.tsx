import React, {useState} from "react";
import {PagesCounter} from "../components/common/PagesCounter";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'PagesCounter',
    component: PagesCounter,
    args: {
        pageSizeVariants: [1, 5, 10, 50, 100],
        defaultPageSizeIndex: 1,
        currentPage: 1,
        totalCount: 23,
    }
} as ComponentMeta<typeof PagesCounter>;

const Template: ComponentStory<typeof PagesCounter> = (args) => {
    const [currentPage, setCurrentPage] = useState(1)
    
    return <PagesCounter
        defaultPageSizeIndex={args.defaultPageSizeIndex}
        currentPage={currentPage}
        totalCount={args.totalCount}
        pageSizeVariants={args.pageSizeVariants}
        onCurrentPageChanged={cp => {
            setCurrentPage(cp)
            action('onCurrentPageChanged')(cp)
        }}
        onPageSizeSelected={args.onPageSizeSelected}
    />
}

export const PagesCounterStory = Template.bind({});
PagesCounterStory.args = {}