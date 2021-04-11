import React from 'react';
import Class from "./aboutMe.module.css";
import { NavLink } from 'react-router-dom';

const ItemAboutMe = (props) => {
    let path = '/about_me/' + props.id;
    return (
        <div className={Class.item}>
            <NavLink to={path} activeClassName={Class.active}>{props.content}</NavLink>
        </div>
    );
};

const AboutMe = () => {
    return (
        <div className={Class.wrapper}>
            <div className={Class.items}>
                <ItemAboutMe id='main' content='main info'></ItemAboutMe>
                <ItemAboutMe id='objective' content='objective'></ItemAboutMe>
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