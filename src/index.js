import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './Context';
import * as serviceWorker from './serviceWorker'; // Ensure this is correctly imported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);

// If you want your app to work offline, change to serviceWorker.register()
serviceWorker.unregister();

