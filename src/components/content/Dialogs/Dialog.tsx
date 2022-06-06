import s from "./Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
    id: string
    name: string
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink
                className={(navData) => navData.isActive ? s.active : ''}
                to={props.id}
            >
                {props.name}
            </NavLink>
        </div>
    )
}