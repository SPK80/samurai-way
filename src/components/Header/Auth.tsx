import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/redux-store";
import {UserDataType} from "../../bll/reducers/authReducer";
import React, {memo} from "react";

export const Auth = memo(() => {
    const userData = useSelector<AppStateType, UserDataType>(state => state.auth)
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
                    : <span>not authorised</span>
            }
        </div>
    )
})