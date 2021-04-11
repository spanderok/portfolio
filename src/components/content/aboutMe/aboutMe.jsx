import React from 'react';
import Class from "./aboutMe.module.css";
import { NavLink } from 'react-router-dom';

let aboutMeItems = [
    {id:'main', content: 'main info'},
    {id:'objective', content: 'Objective'},
    {id:'summary', content: 'Summary'},
    {id:'skills', content: 'Skills'},
    {id:'experience', content: 'Work experience'},
    {id:'education', content: 'Education'},
    {id:'additional', content: 'Additional Information'}
];

const ItemAboutMe = (props) => {
    let path = '/about_me/' + props.id;
    return (
        <div className={Class.item}>
            <NavLink to={path} activeClassName={Class.active}>{props.content}</NavLink>
        </div>
    );
};
let aboutMeItemElements = aboutMeItems.map(el => <ItemAboutMe id={el.id} content={el.content}></ItemAboutMe>);

const AboutMe = () => {
    return (
        <div className={Class.wrapper}>
            <div className={Class.items}>
                {aboutMeItemElements}
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