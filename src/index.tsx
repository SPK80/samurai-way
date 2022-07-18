import React from 'react';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./bll/redux-store";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";

const container = document.getElementById('root')
const root = createRoot(container!)

const renderTree = () => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}

store.subscribe(renderTree)
renderTree()