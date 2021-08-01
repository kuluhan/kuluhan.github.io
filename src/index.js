import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var test = {
  fontSize:"15px"
}



function MyMenu () {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div 
      className={isActive ? 'topnav responsive':'topnav'} 
    >
      <a href="#home" class="active">Home</a>
      <a href="#publications">Publications</a>
      <a href="#CV">CV</a>
      <a href="#" style={test} class="icon" onClick={toggleClass} >&#9776;</a>
    </div>
   );
}  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <MyMenu />,
document.getElementById('mynav')
);

/*
const aboutSection = (
  <h2>About</h2>
);


ReactDOM.render(aboutSection, document.getElementsByClassName('section')[0]);
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
