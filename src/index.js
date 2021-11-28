import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import '../src/styles/tailwind.output.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { HelperContextProvider } from './context/HelperContext';

ReactDOM.render(
  <Provider store={store}>
    <HelperContextProvider>
      <App />
    </HelperContextProvider>
  </Provider>,
  document.getElementById('root')
);
