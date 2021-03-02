import './App.css';
import React from 'react';
import Header from './components/header/Header.js'
import MainMenu from './components/mainMenu/MainMenu.js'
import Footer from './components/footer/Footer.js';
import Content from './components/content/Content';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <MainMenu/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
