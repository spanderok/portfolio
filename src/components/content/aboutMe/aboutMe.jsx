import React from 'react';
import Class from "./aboutMe.module.css";
import ava from "../../../assets/ava.jpg";
import certificate from "../../../assets/certificate.pdf";

const AboutMe = (props) => {

    return (
        <div className={Class.wrapper}>
            <input className={Class.hide} id="hd-1" type="checkbox"></input>
            <label for="hd-1">Main info</label>
            <div className={Class.main}>
                <div> DZMITRY PALYKA </div>
                <div className={Class.ava}>
                    <img src={ava} alt="avator" />
                </div>
                <div>Phone:   +375(29)879-15-36</div>
                <div>Email:     polykodima@mail.ru</div>
                <div>Telegram:   +375(29)879-15-36 </div>
                <div>Linkedin:   linkedin.com/in/dzmitry-palyka-83b9a2208</div>

            </div>
            <br />
            <input className={Class.hide} id="hd-2" type="checkbox"></input>
            <label for="hd-2">Objective</label>
            <div>
                Front-end Developer
            </div>
            <br />
            <input className={Class.hide} id="hd-3" type="checkbox"></input>
            <label for="hd-3">Summary</label>
            <div>
                <p>&nbsp;&nbsp;Graduated from the Military Academy of Belarus, engineer / specialist in personnel management. I served a contract for 5 years as an officer in the army. Head of the radio center.  I grew rapidly in positions, great management experience and experience in solving organizational issues, high communication skills and moral business qualities, very friendly. A constant movement and comprehension of new things are very important for me. The chance to have your own team in the future, lead it and continue to be directly involved in the process (there is a good managerial experience and working with people).
                Then I worked as a barber for 3 years in a barbershop on the territory of the HTP. Well acquainted with the world of IT and realized that I am very pleased to communicate with people from this area.
                </p>
            </div>
            <br />
            <input className={Class.hide} id="hd-4" type="checkbox"></input>
            <label for="hd-4">Skills </label>
            <div>
                <ul>
                    <li>HTML/CSS(Sass)/JavaScript</li>
                    <li>TypeScript, Canvas (basic knowledge)</li>
                    <li>Git</li>
                    <li>Webpack (basic knowledge)</li>
                    <li>Node.js (basic knowledge)</li>
                    <li>Trello (canban board)</li>
                    <li>REST APi/ ExpressJs/ Mongo DB (basic knowledge)</li>
                    <li>React (learning)</li>
                    <li>Knowledge OOP</li>
                </ul>
                <div>English Proficiency:</div>
                <ul>
                    <li>A2 (Pre-intermediate) + </li>
                </ul>
            </div>
            <br />
            <input className={Class.hide} id="hd-5" type="checkbox"></input>
            <label for="hd-5">Work experience </label>
            <div>
                01.12.2020 – 01.01.2021 – Trainee, RS-School (teamwork)<br />
                https://rolling-scopes-school.github.io/ferri0-JS2020Q3/covid-19-dashboard/ (may be problems with API)
                <br />
                15.01.21 – 10.02.21 - Trainee, RS-School (teamwork with REST Api express.js mongoDB)<br />
                https://flamboyant-aryabhata-70f83f.netlify.app/<br />
            </div>
            <br />
            <input className={Class.hide} id="hd-6" type="checkbox"></input>
            <label for="hd-6">Education  </label>
            <div>
                <div>
                   <h3> 01.08.2007 – 01.08.2012 – Military Academy Belarus</h3>
                    <p> Specialization: engineer/ management specialist</p>
                </div>
                <div>
                    <h3>01.09.20 – 15.02.21 – The Rolling Scopes School (JS/FE 2020 Q3)</h3>  
                </div>
                <div>
                    <embed src={certificate}/>
                </div>
            </div>


        </div>
    );
}

export default AboutMe;