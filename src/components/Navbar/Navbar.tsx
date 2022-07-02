import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    
    const navClassNameGetter = (navData: { isActive: boolean }) =>
        navData.isActive ? s.nav + ' ' + s.active : s.nav
    
    return (
        <nav className={s.navbar}>
            
            <NavLink
                className={navClassNameGetter}
                to={'/profile'}
            >
                Profile
            </NavLink>
            
            <NavLink
                className={navClassNameGetter}
                to={'/dialogs'}
            >
                Dialogs
            </NavLink>
            
            <NavLink
                className={navClassNameGetter}
                to={'/users'}
            >
                Users
            </NavLink>
        
        </nav>
    )
}