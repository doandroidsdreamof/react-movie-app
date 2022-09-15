import React from 'react';
import ReactDom from "react-dom";
import  App  from './App';
import './index.css';
import { ThemeProvider } from './components/ThemeContext';


ReactDom.render(
    <ThemeProvider>
    <App />
    </ThemeProvider>, document.getElementById('app'))