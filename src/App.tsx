import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/content/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {DialogsPage} from "./components/content/Dialogs/DialogsPage";
import {DispatchType, RootStateType} from "./redux/redux-store";

type AppPropsType = {
    state: RootStateType
    dispatch: DispatchType //Dispatch<DialogsPageActionTypes | ProfilePageActionTypes>
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