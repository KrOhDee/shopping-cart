import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteSwitch from './RouteSwitch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouteSwitch />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
