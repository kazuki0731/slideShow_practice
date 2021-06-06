import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const obj = {
  x: 100,
  y: 30
}

const texts = ['x', 'y'];

texts.forEach((text) => {
  console.log(`text: ${text} score: ${obj[text]}`)
})