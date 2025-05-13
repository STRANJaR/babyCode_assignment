import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.jsx'
import Navbar from './components/Navbar.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider >
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
