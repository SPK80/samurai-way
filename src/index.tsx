import React from 'react';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
// import {createRoot} from "react-dom/client";
import ReactDOM from 'react-dom';

const container = document.getElementById('root')
// const root = createRoot(container!)

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        , container)
}

store.subscribe(renderTree)
renderTree()