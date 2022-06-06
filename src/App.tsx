import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/content/Profile/Profile";
import {Dialogs} from "./components/content/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    changeNewPost: (newPostText: string) => void
}

export const App: React.FC<AppPropsType> = (props) => {
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
                                state={props.state.profilePage}
                                addPost={props.addPost}
                                changeNewPost={props.changeNewPost}
                            />}
                    />
                    <Route
                        path={'/dialogs/*'}
                        element={
                            <Dialogs
                                {...props.state.dialogsPage}
                            />}
                    />
                </Routes>
            </div>
        </div>
    )
}