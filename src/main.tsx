import { GlobalProvider } from './shared/hooks/useGlobalContext'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import './index.css'
import { DataProvider } from './shared/hooks/useDataContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </GlobalProvider>
  </StrictMode>,
)
