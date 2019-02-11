import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';

if (!window.location.host.startsWith("www")){
    window.location = window.location.protocol + "//www." + window.location.host + window.location.pathname;
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

serviceWorker.register();
