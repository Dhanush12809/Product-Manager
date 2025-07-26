import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import App1 from './App1.jsx'


createRoot(document.getElementById('root')).render(
  // strict mode is used to render two times
  <GlobalState>
    <App1 />
  </GlobalState>
)
