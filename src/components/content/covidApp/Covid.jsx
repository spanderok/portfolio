import React from 'react';
import Class from "./Covid.module.css";
const Covid = () => {
    return (
        <div className={Class.wrapper}>
            <p>bla bla bla</p>
            <ul>
                <li>
                    <a href="https://github.com/Ferri0/covid-rss-team" target="_blank">Source</a>
                </li>
                <li>
                    <a href="https://rolling-scopes-school.github.io/ferri0-JS2020Q3/covid-19-dashboard/" target="_blank">Deploy</a>
                </li>
            </ul>

        </div>
    );
}

export default Covid;