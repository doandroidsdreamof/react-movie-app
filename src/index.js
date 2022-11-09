import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import 'flowbite'

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
)
