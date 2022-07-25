import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/redux-store";
import {AuthUserDataType} from "../../bll/reducers/authReducer";
import React, {memo} from "react";
import {NavLink} from "react-router-dom";

export const Auth = memo(() => {
    const userData = useSelector<AppStateType, AuthUserDataType>(state => state.auth)
    return (
        <div>
            {
                userData.userId
                    ? (
                        <>
                            <div>{userData.userId}</div>
                            <div>{userData.login}</div>
                            <div>{userData.email}</div>
                        </>
                    )
                    : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    );
})