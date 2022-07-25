import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {ProfilePage} from "./components/content/Profile/ProfilePage";
import {DialogsPage} from "./components/content/Dialogs/DialogsPage";
import {UsersPage} from "./components/content/Users/UsersPage";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/redux-store";
import {authApi} from "./api/authApi";
import {setAuthUserDataAC} from "./bll/reducers/authReducer";
import {Login} from "./components/Login";

export const App: React.FC = () => {
    console.log('App')
    
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('authApi.me')
        authApi.me().then(({data, messages, resultCode}) => {
            if (resultCode === 0)
                dispatch(setAuthUserDataAC(data.id, data.login, data.email))
            else console.log(messages)
        })
    }, [])
    
    const userId = useSelector<AppStateType, number | null>(state => state.auth.userId)
    return (
        <div className={s.app}>
            <Header title={'Hello, samurai! Let\'s go!'}/>
            <Navbar/>
            <div className={s.wrapperContent}>
                <Routes>
                    <Route
                        path={'*'}
                        element={<Navigate to={`/profile/${userId ?? ''}`}/>}
                    />
                    <Route
                        path={'/login'}
                        element={<Login/>}
                    />
                    <Route
                        path={'/profile'}
                        element={<ProfilePage/>}
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