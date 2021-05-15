import React from 'react';
import { NavLink } from 'react-router-dom';
import Class from "./mainMenu.module.css";


const MainMenu = () => {
    return (
        <div className={Class.mainMenu}>
            <div className={Class.item}>
                <NavLink to='/about_me' activeClassName={Class.active}>About me</NavLink>
            </div >
            <div className={Class.item}>
                <NavLink to='/space_station' activeClassName={Class.active}>Space station</NavLink>
            </div >
            <div className={Class.item}>
                <NavLink to='/covid' activeClassName={Class.active}>Covid app</NavLink>
            </div>
            <div className={Class.item}>
                <a href='#'>Game puzzle</a>
            </div>
            <div className={Class.item}>
                <a href='#'>Shelter</a>
            </div>
            <div className={Class.item}>
                <a href='#'>Momentum</a>
            </div>

        </div>
    );
}

export default MainMenu;