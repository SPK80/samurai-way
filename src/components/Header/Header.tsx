import React, {memo} from "react";
import s from './Header.module.css'
import {Auth} from "./Auth";

type HeaderPropsType = {
    title: string
}

export const Header = memo((props: HeaderPropsType) => {
    // console.log('Header')
    return (
        <header className={s.Header}>
            <h1> {props.title} </h1>
            <Auth/>
        </header>
    )
})