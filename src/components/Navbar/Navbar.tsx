import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <button>
                <NavLink
                    className={(navData) => navData.isActive ? s.active : ''}
                    to={'/profile'}
                >
                    Profile
                </NavLink>
            </button>
            <button>
                <NavLink
                    className={(navData) => navData.isActive ? s.active : ''}
                    to={'/dialogs'}
                >
                    Dialogs
                </NavLink>
            </button>
        </nav>
    
    )
}