import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Route, Switch, Router } from "react-router-dom";
import Login  from "./components/login/login";
import Navbar from "./components/navigation/navbar";

const baseUrl = "http://localhost:8080";
const username = "admin";
const password = "admin";
const sep = ":";
const credentials = btoa(`${username}`+ `${sep}'+ '${password}`);
const basicAuth = `Basic ${credentials}`;
// axios.interceptors.request.use(request => {
//     request.baseURL = baseUrl;
//     request.headers["Authorization"] = basicAuth;
//     return request;
// })


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
