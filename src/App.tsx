import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {ProfilePage} from "./components/content/Profile/ProfilePage";
import {DialogsPage} from "./components/content/Dialogs/DialogsPage";
import {UsersPage} from "./components/content/Users/UsersPage";

export const App: React.FC = () => {
    const userId = 2
    return (
        <div className={s.app}>
            <Header title={'Hello, samurai! Let\'s go!'}/>
            <Navbar/>
            <div className={s.wrapperContent}>
                <Routes>
                    <Route
                        path={'*'}
                        element={<Navigate to={`/profile/${userId}`}/>}
                    />
                    <Route
                        path={'/profile/:userId'}
                        element={<ProfilePage/>}
                    />
                    <Route
                        path={'/dialogs/*'}
                        element={<DialogsPage/>}
                    />
                    <Route
                        path={'/users'}
                        element={<UsersPage/>}
                    />
                </Routes>
            </div>
        </div>
    )
}