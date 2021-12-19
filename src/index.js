import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [mostImportantItem, second]= ["boots", "tent", "headlamp"];
console.log(mostImportantItem, second);


ReactDOM.render(
  
 <App authorized={false} />,
  document.getElementById('root')
);



