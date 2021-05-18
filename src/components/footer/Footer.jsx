import React from 'react';
import Class from "./footer.module.css";

const Footer = () => {
    return (
        <div className={Class.footer} >
           <div><a href="http://t.me/dip_soul">Telegram</a></div>
           <div><a href="https://www.instagram.com/dip_soul_/">Instagram</a></div>
           <div><a href="https://github.com/spanderok/">GitHub</a></div>
        </div>
    );
}

export default Footer;