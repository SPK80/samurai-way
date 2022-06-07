import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/content/Profile/Profile";
import {Dialogs} from "./components/content/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {StoreType} from "./redux/types";

type AppPropsType = {
    store: StoreType
}

export const App: React.FC<AppPropsType> = ({store}) => {
    const state = store.getState()
    
    return (
        <div className={s.app}>
            <Header title={'Hello, samurai! Let\'s go!'}/>
            <Navbar/>
            <div className={s.wrapperContent}>
                <Routes>
                    <Route
                        path={'/profile'}
                        element={
                            <Profile
                                state={state.profilePage}
                                addPost={store.addPost}
                                changeNewPost={store.changeNewPost}
                            />}
                    />
                    <Route
                        path={'/dialogs/*'}
                        element={
                            <Dialogs
                                state={state.dialogsPage}
                            />}
                    />
                </Routes>
            </div>
        </div>
    )
}