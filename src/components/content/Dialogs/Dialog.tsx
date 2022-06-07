import s from "./Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/stateTypes";

export type DialogPropsType = {
    state: DialogType
}

export const Dialog: React.FC<DialogPropsType> = ({state}) => {
    return (
        <div className={s.dialog}>
            <NavLink
                className={(navData) => navData.isActive ? s.active : ''}
                to={state.id}
            >
                {state.name}
            </NavLink>
        </div>
    )
}