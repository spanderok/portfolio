import React from 'react';
import Class from "./mainMenu.module.css";


const MainMenu = () => {
    return (
        <div className={Class.mainMenu}>
            MainMenu
            <div>About me</div>    
            <div>Space station</div>    
            <div>Covid</div>    
            <div>Gem-pazzle</div>    
            <div>Shelter</div>    
            <div>Momentum</div>    

        </div>
    );
}

export default MainMenu;