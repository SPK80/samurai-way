import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";

const renderTree = () => {
    const state = store.getState()
    const dispatch = store.dispatch;
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={dispatch}
            />
        </BrowserRouter>
        , document.getElementById('root')
    )
}

store.subscribe(renderTree)

renderTree()