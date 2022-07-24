import React, {useEffect} from "react";
import s from './Header.module.css'
import {authApi} from "../../api/authApi";
import {useDispatch, useSelector} from "react-redux";
import {setAuthUserDataAC, UserDataType} from "../../bll/reducers/authReducer";
import {AppStateType} from "../../bll/redux-store";

type HeaderPropsType = {
    title: string
}

export const Header = (props: HeaderPropsType) => {
    const dispatch = useDispatch();
    useEffect(() => {
        authApi.me().then(({data, messages, resultCode}) => {
            if (resultCode === 0)
                dispatch(setAuthUserDataAC(data.id, data.login, data.email))
            else console.log(messages)
        })
    }, [])
    
    const userData = useSelector<AppStateType, UserDataType>(state => state.auth)
    return (
        <header className={s.Header}>
            <h1> {props.title} </h1>
            {userData.userId
                ? <Auth data={userData}/>
                : <span>not authorised</span>
            }
        </header>
    )
}


const Auth: React.FC<{ data: UserDataType }> =
    ({data}) => (
        <div>
            <div>{data.userId}</div>
            <div>{data.login}</div>
            <div>{data.email}</div>
        </div>
    )