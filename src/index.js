/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppImg from './AppImg';
import AppList from './AppList';
import $ from 'jquery'
import AboutMe from './AboutMe';

const root = ReactDOM.createRoot(document.getElementById('root'));

var mode = "appimg";
var board;

if($(location).attr('pathname') === '/' || $(location).attr('pathname') === '/applist'){
  mode = "appimg";
}else if($(location).attr('pathname') === '/applist/aboutMe'){
  mode = "aboutMe";
}else if($(location).attr('pathname') === '/applist/appList'){
  mode = "appList";
}

function article() {
  if (mode === "appimg") {
    return <AppImg/>
  } else if (mode === "aboutMe") {
    return <AboutMe/>;
  } else if (mode === "appList"){
    return <AppList/>;
  } else if (mode === "app"){
    if(board === 1){
      return 
    } else if(board === 2){
      return 
    }
  }
}



root.render(
  <React.StrictMode>
    <App />
    {article()}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
