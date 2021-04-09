import React from 'react';
import Class from "./aboutMe.module.css";
import { NavLink } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className={Class.wrapper}>
            <div className={Class.items}>
                <div className={Class.item}>
                    <NavLink to='/about_me/main' activeClassName={Class.active}>main info</NavLink>
                </div>
                <div className={Class.item}>
                    <NavLink to='/about_me/objective' activeClassName={Class.active}>objective</NavLink>
                </div>
            </div>
            <div className={Class.items_content}>
                <div>
                    DZMITRY PALYKA
                </div>
                <div>
                    Junior Front-end Developer
                </div>
            </div>
        </div>
    );
}

export default AboutMe;