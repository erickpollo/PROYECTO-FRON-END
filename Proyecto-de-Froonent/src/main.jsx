import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './CSS/style.css'   // 👈 importa tu style.css aquí
import App from './App.jsx'
import "./i18n"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
