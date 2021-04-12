import React from 'react';
import Class from "./itemAboutMe.module.css";
import { NavLink } from 'react-router-dom';

const ItemAboutMe = (props) => {
    let path = '/about_me/' + props.id;
    return (
        <div>
            <NavLink to={path} className={Class.item} activeClassName={Class.active}>{props.content}</NavLink>
        </div>
    );
};

export default ItemAboutMe;
