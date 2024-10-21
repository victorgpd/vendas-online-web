import './index.css';
import App from './App';
import store from './store/index';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { DataProvider } from './shared/hooks/useDataContext';
import { GlobalProvider } from './shared/hooks/useGlobalContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </GlobalProvider>
    </Provider>
  </StrictMode>,
);
