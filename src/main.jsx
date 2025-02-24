import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavbarContextProvider from './context/NavbarContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <NavbarContextProvider>
    <App />
    </NavbarContextProvider> 
  </StrictMode>,
)
