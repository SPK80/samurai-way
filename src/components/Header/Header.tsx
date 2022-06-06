import React from "react";
import s from './Header.module.css'

type HeaderPropsType = {
    title: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.Header}>
            <h1> {props.title} </h1>
        </header>
    )
}