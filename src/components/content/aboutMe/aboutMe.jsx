import React from 'react';
import Class from "./aboutMe.module.css";
import ItemAboutMe from "./aboutParagraph/ItemAboutMe.jsx";





const AboutMe = (props) => {
    let aboutMeItemElements = props.aboutMeItems.map(el => <ItemAboutMe id={el.id} content={el.content}></ItemAboutMe>);

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