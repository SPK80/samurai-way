import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {ProfilePage} from "./components/content/Profile/ProfilePage";
import {Route, Routes} from "react-router-dom";
import {DialogsPage} from "./components/content/Dialogs/DialogsPage";

export const App: React.FC = () => {
    return (
        <div className={s.app}>
            <Header title={'Hello, samurai! Let\'s go!'}/>
            <Navbar/>
            <div className={s.wrapperContent}>
                <Routes>
                    <Route
                        path={'/profile'}
                        element={<ProfilePage/>}
                    />
                    <Route
                        path={'/dialogs/*'}
                        element={<DialogsPage/>}
                    />
                </Routes>
            </div>
        </div>
    )
}