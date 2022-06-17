import React, {Dispatch} from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/content/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {DialogsPage} from "./components/content/Dialogs/DialogsPage";
import {DialogsPageType, ProfilePageType} from "./redux/stateTypes";
import {EmptyObject} from "redux";
import {DialogsPageActionTypes} from "./redux/dialogsPageActionTypes";
import {ProfilePageActionTypes} from "./redux/profilePageActionTypes";

type AppPropsType = {
    state: EmptyObject & { dialogsPage: DialogsPageType; profilePage: ProfilePageType; }
    dispatch: Dispatch<DialogsPageActionTypes | ProfilePageActionTypes>
}

export const App: React.FC<AppPropsType> = ({state, dispatch}) => {
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
                                dispatch={dispatch}
                            />}
                    />
                    <Route
                        path={'/dialogs/*'}
                        element={
                            <DialogsPage
                                state={state.dialogsPage}
                                dispatch={dispatch}
                            />}
                    />
                </Routes>
            </div>
        </div>
    )
}