import React from 'react';
import ReactDom from "react-dom";
import  App  from './App';
import './index.css';
import { ThemeProvider } from './components/ThemeContext';
import 'flowbite';


ReactDom.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>, document.getElementById('app'))