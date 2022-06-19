import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/content/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {DialogsPage} from "./components/content/Dialogs/DialogsPage";
import {StoreType} from "./redux/redux-store";

type AppPropsType = {
    store: StoreType
}

export const App: React.FC<AppPropsType> = ({store}) => {
    return (
        <div className={s.app}>
            <Header title={'Hello, samurai! Let\'s go!'}/>
            <Navbar/>
            <div className={s.wrapperContent}>
                <Routes>
                    <Route
                        path={'/profile'}
                        element={<Profile store={store}/>}
                    />
                    <Route
                        path={'/dialogs/*'}
                        element={<DialogsPage store={store}/>}
                    />
                </Routes>
            </div>
        </div>
    )
}