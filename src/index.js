import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import 'flowbite'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
