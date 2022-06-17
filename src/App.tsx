import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/content/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {IStore} from "./redux/store";
import {DialogsPage} from "./components/content/Dialogs/DialogsPage";

type AppPropsType = {
    store: IStore
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
                                dispatch={store.dispatch.bind(store)}
                            />}
                    />
                    <Route
                        path={'/dialogs/*'}
                        element={
                            <DialogsPage
                                state={state.dialogsPage}
                                dispatch={store.dispatch.bind(store)}
                            />}
                    />
                </Routes>
            </div>
        </div>
    )
}