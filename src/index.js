import React from 'react';
import ReactDom from "react-dom";
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import 'flowbite';


ReactDom.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>, document.getElementById('app'))