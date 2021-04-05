import './App.css';
import React from 'react';
import Header from './components/header/Header.jsx'
import MainMenu from './components/mainMenu/MainMenu.jsx'
import Footer from './components/footer/Footer.jsx';
import AboutMe from './components/content/aboutMe/aboutMe.jsx'
import SpaceStation from "./components/content/spaceStation/spaceStation.jsx";
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <MainMenu />
        <div className='app-wrapper-content'>
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/space_station' component={SpaceStation} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
