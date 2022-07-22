import {BrowserRouter} from "react-router-dom";
import React from "react";

export const BrowserRouterDecorator = (storyFn: () => React.ReactNode) => {
    return (
        <BrowserRouter>
            {storyFn()}
        </BrowserRouter>
    )
}