import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let aboutMeItems = [
  { id: 'main', content: 'main info' },
  { id: 'objective', content: 'Objective' },
  { id: 'summary', content: 'Summary' },
  { id: 'skills', content: 'Skills' },
  { id: 'experience', content: 'Work experience' },
  { id: 'education', content: 'Education' },
  { id: 'additional', content: 'Additional Information' }
];

ReactDOM.render(
  <React.StrictMode>
    <App aboutMeItems={aboutMeItems}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
