import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import { HelperContextProvider } from './context/HelperContext';

ReactDOM.render(
  <React.StrictMode>
    <HelperContextProvider>
      <App />
    </HelperContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
