import './index.css';
import App from './App';
import store from './store/index';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
