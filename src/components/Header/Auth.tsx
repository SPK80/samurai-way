import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/redux-store";
import {AuthUserDataType, logOutAC, setAuthUserDataAC} from "../../bll/reducers/authReducer";
import React, {memo} from "react";
import {NavLink} from "react-router-dom";
import {authApi} from "../../api/authApi";

export const Auth = memo(() => {
    const userData = useSelector<AppStateType, AuthUserDataType>(state => state.auth)
    const dispatch = useDispatch()
    
    const onclickLogOutHandler = () => {
        authApi.logOut()
            .then(data => {
                console.log('logOutAC', data)
                dispatch(logOutAC())
            })
            .catch(console.log)
    }
    
    return (
        <div>
            {
                userData.userId
                    ? (
                        <>
                            <div>{userData.login}</div>
                            <div>{userData.email}</div>
                            <button onClick={onclickLogOutHandler}>LogOut</button>
                        </>
                    )
                    : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    );
})