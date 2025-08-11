import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import router from './router/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx'
import { ThemeProvider } from './pages/Shared/ThemeContext.jsx'
import router from './router/router.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
 
)
