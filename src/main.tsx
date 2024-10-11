import { GlobalProvider } from './shared/hooks/useGlobalContext'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
)
