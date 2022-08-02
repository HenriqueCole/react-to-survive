import React from 'react'
import ReactDOM from 'react-dom/client'
import {Router , Route , Routes } from 'react-router'

import WelcomePage from './Pages/WelcomePage/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Routes>
      <Route path="/" element={<WelcomePage />} />
    </Routes>
    
  </React.StrictMode>
)
