import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {state, subscribe, addPost, changeNewPost} from "./redux/state";

const rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                changeNewPost={changeNewPost}
            />
        </BrowserRouter>
        , document.getElementById('root')
    )
}

subscribe(rerender)

rerender()